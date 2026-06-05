const app = {
    currentTest: null,
    currentQuestionIndex: 0,
    answers: [],

    init() {
        this.renderHome();
    },

    renderHome() {
        const container = document.getElementById('test-list');
        container.innerHTML = '';
        testList.forEach(test => {
            const card = document.createElement('div');
            card.className = `flat-card p-6 flex flex-col h-full`;
            
            let btnHtml = `<button onclick="app.startTest('${test.id}')" class="mt-auto w-full bg-gray-50 text-gray-800 font-bold py-3 px-4 rounded-xl hover:bg-indigo-600 hover:text-white border-2 border-gray-100 hover:border-indigo-600 transition-all duration-200 flex items-center justify-center group">Bắt đầu <i class="fa-solid fa-arrow-right ml-2 opacity-50 group-hover:opacity-100 transition-opacity"></i></button>`;

            card.innerHTML = `
                <div class="flex items-center mb-5">
                    <div class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl shadow-sm border border-gray-100 ${test.color}">
                        <i class="fa-solid ${test.icon}"></i>
                    </div>
                    <h4 class="ml-4 text-xl font-bold text-gray-800 leading-tight">${test.name}</h4>
                </div>
                <p class="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">${test.desc}</p>
                ${btnHtml}
            `;
            container.appendChild(card);
        });
    },

    showHome() {
        document.getElementById('home-view').classList.remove('hidden-view');
        document.getElementById('quiz-view').classList.add('hidden-view');
        document.getElementById('result-view').classList.add('hidden-view');
        window.scrollTo(0,0);
    },

    startTest(id) {
        if (!testData[id]) {
            alert('Bài kiểm tra này đang được cập nhật.');
            return;
        }
        this.currentTest = testData[id];
        this.currentQuestionIndex = 0;
        this.answers = [];
        
        document.getElementById('home-view').classList.add('hidden-view');
        document.getElementById('result-view').classList.add('hidden-view');
        document.getElementById('quiz-view').classList.remove('hidden-view');
        
        document.getElementById('quiz-title').textContent = this.currentTest.title;
        document.getElementById('quiz-instructions').textContent = this.currentTest.instructions;
        
        this.renderQuestion();
        window.scrollTo(0,0);
    },

    renderQuestion() {
        const q = this.currentTest.questions[this.currentQuestionIndex];
        const total = this.currentTest.questions.length;
        
        // Progress Bar Update
        const progressPercent = (this.currentQuestionIndex / total) * 100;
        document.getElementById('quiz-progress-text').textContent = `${Math.round(progressPercent)}%`;
        document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
        
        // Handle string vs object question formats
        document.getElementById('question-text').textContent = typeof q === 'string' ? q : q.text;
        
        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';
        
        this.currentTest.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = "w-full text-center p-5 rounded-2xl border-2 border-gray-200 bg-white hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 font-bold text-gray-700 text-lg hover:-translate-y-1 shadow-sm hover:shadow-md";
            btn.textContent = opt.label;
            btn.onclick = () => this.handleAnswer(opt.score);
            optsContainer.appendChild(btn);
        });
    },

    handleAnswer(score) {
        this.answers.push(score);
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.currentTest.questions.length) {
            this.renderQuestion();
        } else {
            // Fill 100% before transition
            document.getElementById('quiz-progress-text').textContent = `100%`;
            document.getElementById('quiz-progress-bar').style.width = `100%`;
            setTimeout(() => this.calculateResult(), 400);
        }
    },

    calculateResult() {
        document.getElementById('quiz-view').classList.add('hidden-view');
        document.getElementById('result-view').classList.remove('hidden-view');
        window.scrollTo(0,0);
        
        document.getElementById('result-test-title').textContent = this.currentTest.title;
        const iconData = testList.find(t => t.id === this.currentTest.id);
        if (iconData) {
            document.getElementById('result-main-icon').className = `fa-solid ${iconData.icon} ${iconData.color}`;
        }
        
        const scoreSection = document.getElementById('score-section');
        const detailedAnalysis = document.getElementById('detailed-analysis');
        const citationsSection = document.getElementById('result-citations');
        
        scoreSection.innerHTML = '';
        detailedAnalysis.innerHTML = '';

        if (this.currentTest.scoring_type === 'bigfive') {
            this.renderBigFiveResult(scoreSection, detailedAnalysis);
        } else {
            this.renderStandardResult(scoreSection, detailedAnalysis);
        }

        // Render Citations
        citationsSection.innerHTML = `Dựa trên tiêu chuẩn của: <strong>${this.currentTest.scoring.citations}</strong>`;
    },

    renderStandardResult(scoreSection, detailedAnalysis) {
        let totalScore = 0;
        
        // Handle reverse scoring if needed
        if (this.currentTest.scoring_type === 'reverse_score') {
            const maxOptScore = Math.max(...this.currentTest.options.map(o => o.score));
            const minOptScore = Math.min(...this.currentTest.options.map(o => o.score));
            this.answers.forEach((ansScore, idx) => {
                const q = this.currentTest.questions[idx];
                if (q.reverse) {
                    // example: if 1-4 scale, reverse of 1 is 4 (1+4=5 -> 5-1 = 4)
                    // if 0-4 scale, reverse of 0 is 4 (0+4=4 -> 4-0 = 4)
                    totalScore += (maxOptScore + minOptScore) - ansScore;
                } else {
                    totalScore += ansScore;
                }
            });
        } else {
            totalScore = this.answers.reduce((a, b) => a + b, 0);
        }

        let matchedRange = this.currentTest.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max);
        if(!matchedRange) matchedRange = this.currentTest.scoring.ranges[this.currentTest.scoring.ranges.length-1];

        // Update header color based on range color
        const colorClass = matchedRange.color.replace('bg-', 'text-');
        const fromColor = matchedRange.color.replace('bg-', 'from-');
        document.getElementById('result-header-bar').className = `absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${fromColor} to-gray-800 opacity-80`;

        document.getElementById('result-summary').innerHTML = `<span class="${colorClass}">${matchedRange.summary}</span>`;
        
        scoreSection.innerHTML = `
            <div class="inline-block px-6 py-2 rounded-full text-white font-bold text-sm ${matchedRange.color} shadow-md uppercase tracking-widest mb-4">Kết quả: ${matchedRange.label}</div>
            <div class="text-gray-400 font-medium text-sm">Tổng điểm: ${totalScore}</div>
        `;

        this.renderAnalysisBlocks(detailedAnalysis, matchedRange);
    },

    renderBigFiveResult(scoreSection, detailedAnalysis) {
        const scores = { O:0, C:0, E:0, A:0, N:0 };
        const maxPerTrait = (this.currentTest.questions.length / 5) * 5; 
        
        this.answers.forEach((score, index) => {
            const q = this.currentTest.questions[index];
            let finalScore = q.reverse ? (6 - score) : score; 
            scores[q.trait] += finalScore;
        });

        document.getElementById('result-summary').textContent = "Hồ sơ Tính cách của bạn";
        document.getElementById('result-header-bar').className = `absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-80`;

        scoreSection.innerHTML = '<div class="space-y-6 max-w-lg mx-auto mt-8" id="traits-container"></div>';
        const traitsContainer = document.getElementById('traits-container');

        let strengthsList = [];
        let weaknessesList = [];

        Object.keys(scores).forEach(traitKey => {
            const traitData = this.currentTest.scoring.traits[traitKey];
            const score = scores[traitKey];
            const percent = (score / maxPerTrait) * 100;
            const level = percent > 60 ? 'high' : (percent < 40 ? 'low' : 'mid');

            traitsContainer.innerHTML += `
                <div>
                    <div class="flex justify-between text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">
                        <span>${traitData.name}</span>
                        <span class="text-indigo-500">${Math.round(percent)}%</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div class="bg-indigo-500 h-3 rounded-full" style="width: ${percent}%"></div>
                    </div>
                </div>
            `;

            if (level === 'high') {
                clinical_traits.push(`<strong>${traitData.name}:</strong> ${traitData.high}`);
            } else {
                clinical_traits.push(`<strong>${traitData.name}:</strong> ${traitData.low}`);
            }
        });

        const fakeMatchedRange = {
            clinical_analysis: "Sự kết hợp của 5 khía cạnh này tạo nên một bản đồ thần kinh độc nhất. Đây là 'hệ điều hành' riêng của bạn.",
            multidimensional: {
                cognitive: "Tính cách định hình cách não bộ bạn diễn dịch thế giới thành thông tin (Threats or Rewards).",
                behavioral: "Tính cách quyết định những thói quen vô thức bạn thực hiện mỗi ngày để thích nghi với môi trường."
            },
            roadmap: {
                immediate: "Ngừng so sánh bản thân với hệ điều hành của người khác.",
                long_term: "Học cách thiết kế môi trường làm việc và vòng tròn xã hội sao cho phù hợp nhất với các đặc tính sinh học này, thay vì cố gắng bẻ cong chúng.",
                red_flags: "Không có"
            }
        };

        let html = '';
        html += `
            <div class="bg-white p-8 md:p-10 rounded-3xl border-2 border-purple-100 shadow-sm relative overflow-hidden mb-6">
                <div class="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
                <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center"><i class="fa-solid fa-dna text-purple-500 mr-4 text-3xl"></i> Phân Tích Thần Kinh Tính Cách</h3>
                <ul class="space-y-4 text-gray-700 text-lg leading-relaxed list-disc pl-5">
                    ${clinical_traits.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
        `;
        
        detailedAnalysis.innerHTML = html;
        this.renderAnalysisBlocks(detailedAnalysis, fakeMatchedRange, true);
    },

    renderAnalysisBlocks(container, data, append = false) {
        let html = append ? container.innerHTML : '';
        
        if (data.clinical_analysis) {
            html += `
                <div class="bg-white p-8 md:p-10 rounded-3xl border-2 border-blue-100 shadow-sm relative overflow-hidden mb-6">
                    <div class="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                    <h3 class="text-2xl font-black text-gray-800 mb-4 flex items-center"><i class="fa-solid fa-brain text-blue-500 mr-4 text-3xl"></i> Phân Tích Lâm Sàng (Clinical Analysis)</h3>
                    <p class="text-gray-700 text-lg leading-relaxed">${data.clinical_analysis}</p>
                </div>
            `;
        }

        if (data.multidimensional) {
            html += `
                <div class="bg-white p-8 md:p-10 rounded-3xl border-2 border-indigo-100 shadow-sm relative overflow-hidden mb-6">
                    <div class="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
                    <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center"><i class="fa-solid fa-layer-group text-indigo-500 mr-4 text-3xl"></i> Đánh Giá Đa Chiều</h3>
                    
                    <div class="mb-6">
                        <h4 class="text-xl font-bold text-gray-800 mb-3 flex items-center"><i class="fa-solid fa-head-side-virus text-gray-400 mr-2"></i> Lăng kính Nhận thức (Cognitive)</h4>
                        <p class="text-gray-700 text-lg leading-relaxed">${data.multidimensional.cognitive}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-gray-800 mb-3 flex items-center"><i class="fa-solid fa-person-running text-gray-400 mr-2"></i> Phản xạ Hành vi (Behavioral)</h4>
                        <p class="text-gray-700 text-lg leading-relaxed">${data.multidimensional.behavioral}</p>
                    </div>
                </div>
            `;
        }

        if (data.roadmap) {
            html += `
                <div class="bg-white p-8 md:p-10 rounded-3xl border-2 border-emerald-100 shadow-sm relative overflow-hidden mb-6">
                    <div class="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                    <h3 class="text-2xl font-black text-gray-800 mb-6 flex items-center"><i class="fa-solid fa-map-location-dot text-emerald-500 mr-4 text-3xl"></i> Lộ trình Trị liệu (Therapeutic Roadmap)</h3>
                    
                    <ul class="space-y-5">
                        <li class="flex items-start">
                            <i class="fa-solid fa-bolt text-yellow-500 mt-1.5 mr-4 text-xl"></i>
                            <div>
                                <strong class="block text-gray-800 text-lg mb-1">Cấp cứu Tâm lý (Immediate)</strong>
                                <span class="text-gray-700 text-lg">${data.roadmap.immediate}</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fa-solid fa-seedling text-emerald-500 mt-1.5 mr-4 text-xl"></i>
                            <div>
                                <strong class="block text-gray-800 text-lg mb-1">Xây dựng Thói quen (Long-term)</strong>
                                <span class="text-gray-700 text-lg">${data.roadmap.long_term}</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fa-solid fa-flag text-red-500 mt-1.5 mr-4 text-xl"></i>
                            <div>
                                <strong class="block text-red-600 text-lg mb-1">Cảnh báo Đỏ (Red Flags)</strong>
                                <span class="text-gray-700 text-lg">${data.roadmap.red_flags}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            `;
        }

        container.innerHTML = html;
    }
};

window.onload = () => app.init();
