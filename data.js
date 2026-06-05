const testList = [
    { id: 'phq9', name: 'Trầm cảm (PHQ-9)', desc: 'Đo lường mức độ trầm cảm.', icon: 'fa-cloud-rain', color: 'text-indigo-500', ready: true },
    { id: 'gad7', name: 'Lo âu (GAD-7)', desc: 'Đánh giá mức độ lo âu lan tỏa.', icon: 'fa-bolt', color: 'text-orange-500', ready: true },
    { id: 'bigfive', name: 'Tính cách (Big Five)', desc: 'Khám phá 5 khía cạnh tính cách.', icon: 'fa-puzzle-piece', color: 'text-purple-500', ready: true },
    { id: 'pss10', name: 'Mức độ Stress', desc: 'Đánh giá mức độ căng thẳng.', icon: 'fa-fire', color: 'text-red-500', ready: true },
    { id: 'psqi', name: 'Chất lượng giấc ngủ', desc: 'Kiểm tra thói quen ngủ.', icon: 'fa-moon', color: 'text-blue-500', ready: true },
    { id: 'asrs', name: 'ADHD (ASRS)', desc: 'Sàng lọc tăng động giảm chú ý.', icon: 'fa-hurricane', color: 'text-teal-500', ready: true },
    { id: 'eq', name: 'Trí tuệ cảm xúc', desc: 'Đo lường khả năng quản lý cảm xúc.', icon: 'fa-heart', color: 'text-pink-500', ready: true },
    { id: 'mbi', name: 'Burnout (MBI)', desc: 'Đánh giá mức độ kiệt sức.', icon: 'fa-battery-quarter', color: 'text-slate-600', ready: true },
    { id: 'rses', name: 'Lòng tự trọng', desc: 'Thang đo lòng tự trọng.', icon: 'fa-medal', color: 'text-yellow-500', ready: true },
    { id: 'ybocs', name: 'OCD (Y-BOCS)', desc: 'Sàng lọc ám ảnh cưỡng chế.', icon: 'fa-rotate', color: 'text-cyan-500', ready: true }
];

const testData = {
    "phq9": {
        "id": "phq9",
        "title": "Đánh giá Mức độ Trầm cảm (PHQ-9)",
        "description": "PHQ-9 là công cụ tiêu chuẩn để sàng lọc trầm cảm.",
        "instructions": "Trong 2 tuần qua, bạn bị làm phiền bởi các vấn đề sau với mức độ nào?",
        "questions": [
            "Ít hứng thú hoặc niềm vui trong việc làm bất cứ điều gì",
            "Cảm thấy buồn rầu, chán nản hoặc tuyệt vọng",
            "Khó vào giấc ngủ, khó duy trì giấc ngủ, hoặc ngủ quá nhiều",
            "Cảm thấy mệt mỏi hoặc ít năng lượng",
            "Chán ăn hoặc ăn quá nhiều",
            "Cảm thấy tồi tệ về bản thân - hoặc cảm thấy mình là kẻ thất bại",
            "Khó tập trung vào mọi việc, chẳng hạn như đọc báo hoặc xem tivi",
            "Di chuyển hoặc nói năng chậm chạp. Hoặc ngược lại - bồn chồn",
            "Có ý nghĩ rằng thà chết đi thì tốt hơn, hoặc muốn tự làm đau bản thân"
        ],
        "options": [
            { "label": "Không có ngày nào", "score": 0 },
            { "label": "Vài ngày", "score": 1 },
            { "label": "Hơn một nửa số ngày", "score": 2 },
            { "label": "Gần như mỗi ngày", "score": 3 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 9, "label": "Nguy cơ thấp", "color": "bg-emerald-500", 
                  "summary": "Bạn hiện đang duy trì được sự ổn định tâm lý khá tốt.",
                  "clinical_analysis": "Dựa trên kết quả này, <strong>Hệ thống viền (Limbic system)</strong> của bạn đang hoạt động ở mức cân bằng. Các chất dẫn truyền thần kinh như Serotonin và Dopamine đang được tiết ra ở mức độ sinh lý bình thường, giúp bạn duy trì được sự ổn định trong chu kỳ giấc ngủ và cảm giác thèm ăn.",
                  "multidimensional": {
                      "cognitive": "Bạn duy trì được lăng kính tư duy thực tế, không có xu hướng <strong>Thảm họa hóa (Catastrophizing)</strong> khi đối mặt với khó khăn.",
                      "behavioral": "Duy trì tốt các sinh hoạt cốt lõi (ăn, ngủ, giao tiếp xã hội)."
                  },
                  "roadmap": {
                      "immediate": "Thực hành lòng biết ơn (Gratitude journaling) mỗi tối để củng cố các liên kết thần kinh tích cực.",
                      "long_term": "Duy trì tập thể dục 30 phút/ngày để thúc đẩy sản sinh Endorphin tự nhiên.",
                      "red_flags": "Nếu mất ngủ kéo dài trên 3 ngày liên tiếp, hãy chú ý điều chỉnh."
                  },
                  "citations": "Theo tiêu chuẩn DSM-5 của Hiệp hội Tâm thần học Hoa Kỳ (APA) và thang đo PHQ-9 (Kroenke et al., 2001)."
                },
                { "min": 10, "max": 14, "label": "Trầm cảm vừa (Dysthymia)", "color": "bg-orange-500",
                  "summary": "Các triệu chứng trầm cảm đang cản trở đáng kể chất lượng sống của bạn.",
                  "clinical_analysis": "Biểu hiện của sự <strong>suy giảm thể tích ở hồi hải mã (Hippocampus)</strong> do hormone căng thẳng Cortisol tiết ra kéo dài. Điều này dẫn đến sự uể oải về mặt sinh lý, sương mù não (brain fog) và suy giảm khả năng tập trung. Vỏ não trước trán (Prefrontal Cortex) của bạn đang phải làm việc quá sức để chống lại các cảm xúc tiêu cực.",
                  "multidimensional": {
                      "cognitive": "Xuất hiện <strong>Tư duy lọc hạt (Mental Filtering)</strong>: Bạn bắt đầu chỉ tập trung vào những thất bại và bỏ qua những lời khen ngợi hoặc thành tựu.",
                      "behavioral": "Rút lui xã hội vô thức (Social withdrawal), trì hoãn công việc do thiếu hụt Dopamine."
                  },
                  "roadmap": {
                      "immediate": "<strong>Kích hoạt hành vi (Behavioral Activation):</strong> Ép bản thân thực hiện 1 việc siêu nhỏ mỗi ngày (ví dụ: tưới cây, dọn giường) để tái tạo vòng lặp phần thưởng Dopamine.",
                      "long_term": "Áp dụng liệu pháp CBT: Ghi lại các suy nghĩ tự động tiêu cực (ANTs) và phản biện lại chúng bằng các bằng chứng thực tế.",
                      "red_flags": "Bắt đầu xuất hiện ý nghĩ tuyệt vọng hoặc bỏ bữa liên tục."
                  },
                  "citations": "Dựa trên mô hình Liệu pháp Nhận thức của Aaron Beck và các phân tích hình ảnh não bộ lâm sàng về trầm cảm."
                },
                { "min": 15, "max": 27, "label": "Trầm cảm nặng (MDD)", "color": "bg-red-500",
                  "summary": "Mức độ cảnh báo Đỏ. Trầm cảm đang chiếm quyền kiểm soát hệ thống thần kinh của bạn.",
                  "clinical_analysis": "Sự <strong>đóng băng của hệ thần kinh phó giao cảm (Dorsal Vagal Shutdown)</strong>. Não bộ của bạn đang rơi vào trạng thái 'Bảo toàn năng lượng' cực đoan, dẫn đến cảm giác tê liệt cảm xúc (Anhedonia) và kiệt quệ thể chất trầm trọng. Sự suy giảm nghiêm trọng của hệ thống Serotonergic khiến bạn cảm thấy nỗi đau tâm lý một cách chân thực như nỗi đau thể xác.",
                  "multidimensional": {
                      "cognitive": "<strong>Cá nhân hóa (Personalization)</strong> và <strong>Đổ lỗi (Blaming)</strong>: Cảm giác tội lỗi sâu sắc, tin rằng sự tồn tại của mình là một gánh nặng.",
                      "behavioral": "Mất khả năng sinh hoạt cơ bản (không thể ra khỏi giường, rối loạn ăn ngủ nghiêm trọng), cách ly hoàn toàn."
                  },
                  "roadmap": {
                      "immediate": "<strong>Không cố gắng phân tích tâm lý lúc này.</strong> Ưu tiên hàng đầu là sự an toàn. Hãy gọi cho một người thân đáng tin cậy hoặc đường dây nóng hỗ trợ tâm lý.",
                      "long_term": "Cần có sự can thiệp y khoa chuyên nghiệp. Sự kết hợp giữa Thuốc chống trầm cảm (SSRI/SNRI) để điều chỉnh sinh hóa não bộ và Liệu pháp Tâm lý là tiêu chuẩn Vàng.",
                      "red_flags": "<strong>CẤP CỨU Y TẾ:</strong> Nếu có bất kỳ ý nghĩ tự hại hoặc lên kế hoạch kết thúc cuộc đời, hãy đến ngay trung tâm y tế gần nhất."
                  },
                  "citations": "Nghiên cứu lâm sàng về Rối loạn Trầm cảm Chủ yếu (MDD) trong DSM-5 và hướng dẫn can thiệp khẩn cấp của Tổ chức Y tế Thế giới (WHO)."
                }
            ],
            "citations": "Thang đo PHQ-9 (Kroenke, Spitzer, & Williams, 2001)."
        }
    },
    "gad7": {
        "id": "gad7",
        "title": "Đánh giá Mức độ Lo âu (GAD-7)",
        "description": "GAD-7 đánh giá mức độ nghiêm trọng của Rối loạn lo âu lan tỏa.",
        "instructions": "Trong 2 tuần qua, bạn bị làm phiền bởi các vấn đề sau với mức độ nào?",
        "questions": [
            "Cảm thấy hồi hộp, lo âu hoặc căng thẳng",
            "Không thể ngừng hoặc không thể kiểm soát sự lo lắng",
            "Lo lắng quá nhiều về những điều khác nhau",
            "Khó thư giãn",
            "Bồn chồn đến mức khó có thể ngồi yên",
            "Dễ trở nên bực tức hoặc cáu gắt",
            "Cảm thấy sợ hãi như thể có điều gì đó tồi tệ sắp xảy ra"
        ],
        "options": [
            { "label": "Không có ngày nào", "score": 0 },
            { "label": "Vài ngày", "score": 1 },
            { "label": "Hơn nửa số ngày", "score": 2 },
            { "label": "Mỗi ngày", "score": 3 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 9, "label": "Căng thẳng sinh lý bình thường", "color": "bg-emerald-500", 
                  "summary": "Hệ thống cảnh báo của bạn đang hoạt động chuẩn xác, không có dấu hiệu lo âu bệnh lý.",
                  "clinical_analysis": "Hạch hạnh nhân (Amygdala) - trung tâm báo động của não bộ - chỉ kích hoạt khi có mối đe dọa thực sự, và Vỏ não trước trán (PFC) có khả năng dập tắt báo động này nhanh chóng. Điều này được gọi là sự linh hoạt của hệ thần kinh tự chủ.",
                  "multidimensional": {
                      "cognitive": "Tư duy linh hoạt, đánh giá đúng mức độ của các rủi ro trong cuộc sống.",
                      "behavioral": "Có thể thư giãn và thả lỏng cơ bắp sau khi hoàn thành công việc."
                  },
                  "roadmap": {
                      "immediate": "Bài tập quét cơ thể (Body Scan) 5 phút trước khi ngủ để duy trì sự kết nối giữa thân và tâm.",
                      "long_term": "Xây dựng kỹ năng Chánh niệm (Mindfulness) để tăng cường sức mạnh cho vỏ não trước trán.",
                      "red_flags": "Thỉnh thoảng nhịp tim nhanh vô cớ."
                  },
                  "citations": "Dựa trên mô hình đánh giá lo âu GAD-7 (Spitzer et al., 2006)."
                },
                { "min": 10, "max": 14, "label": "Lo âu mức độ Vừa", "color": "bg-orange-500",
                  "summary": "Não bộ của bạn đang trong trạng thái cảnh giác cao độ (Hypervigilance).",
                  "clinical_analysis": "Hệ thần kinh Giao cảm (Sympathetic Nervous System) đang bị kích thích liên tục, bơm Adrenaline và Cortisol vào máu. Cơ thể bạn đang chuẩn bị cho một phản ứng 'Chiến-hoặc-Chạy' (Fight-or-Flight) dù không có con thú dữ nào thực sự tồn tại. Điều này gây ra căng cơ, tim đập nhanh và các vấn đề về tiêu hóa (Trục Não-Ruột).",
                  "multidimensional": {
                      "cognitive": "<strong>Đoán trước tương lai (Fortune Telling)</strong>: Luôn tưởng tượng ra viễn cảnh tồi tệ nhất (What-ifs).",
                      "behavioral": "Kiểm tra email/tin nhắn liên tục, cắn móng tay, rung đùi hoặc khó ngồi yên."
                  },
                  "roadmap": {
                      "immediate": "<strong>Kỹ thuật Thở hộp (Box Breathing):</strong> Hít 4s - Giữ 4s - Thở 4s - Giữ 4s để đánh lừa dây thần kinh phế vị (Vagus Nerve) rằng bạn đang an toàn.",
                      "long_term": "Thực hành liệu pháp Ghi chép Lo âu (Worry Time): Dành đúng 15 phút mỗi ngày lúc 7h tối chỉ để lo lắng, ngoài giờ đó, hãy ghi chú lại và để dành.",
                      "red_flags": "Bắt đầu né tránh các tình huống xã hội vì sợ hãi."
                  },
                  "citations": "Dựa trên Thuyết nhận thức về lo âu của Beck và Emery."
                },
                { "min": 15, "max": 21, "label": "Rối loạn Lo âu Nặng", "color": "bg-red-500",
                  "summary": "Hệ thống báo động của bạn đã bị hỏng, liên tục reo lên những tiếng còi báo động vô hình.",
                  "clinical_analysis": "Độ dẻo dai thần kinh đang bị bào mòn. Sự mất cân bằng nghiêm trọng của GABA (chất ức chế thần kinh) khiến não bộ không thể phanh lại các luồng suy nghĩ hoảng loạn. Có thể dẫn đến các cơn Hoảng loạn (Panic Attacks) với cảm giác nghẹt thở, đau ngực, cảm giác như sắp chết (Derealization).",
                  "multidimensional": {
                      "cognitive": "<strong>Tư duy Trắng-Đen (Dichotomous thinking)</strong> và sự <strong>Dán nhãn (Labeling)</strong> bản thân là yếu kém.",
                      "behavioral": "Các hành vi an toàn cưỡng chế (Safety behaviors), hoàn toàn không thể thư giãn, rối loạn giấc ngủ nghiêm trọng."
                  },
                  "roadmap": {
                      "immediate": "<strong>Kỹ thuật Nối đất (Grounding 5-4-3-2-1):</strong> Liệt kê 5 thứ bạn nhìn thấy, 4 thứ chạm được, 3 thứ nghe được, 2 thứ ngửi được, 1 thứ nếm được để kéo não bộ về hiện tại.",
                      "long_term": "Cần tham vấn Y khoa chuyên nghiệp. Bác sĩ có thể chỉ định thuốc an thần ngắn hạn kết hợp Liệu pháp CBT để tái cấu trúc lại hệ thống nhận thức.",
                      "red_flags": "Sự xuất hiện của các cơn Panic Attack không báo trước, hoặc nhịp tim đập quá nhanh gây ngất."
                  },
                  "citations": "Nghiên cứu lâm sàng về Rối loạn Lo âu Lan tỏa (GAD) theo DSM-5 của APA."
                }
            ],
            "citations": "Thang đo GAD-7 (Spitzer, Kroenke, Williams, & Löwe, 2006)."
        }
    },
    "bigfive": {
        "id": "bigfive",
        "title": "Trắc nghiệm Tính cách Big Five",
        "description": "Phân tích 5 khía cạnh cốt lõi định hình tính cách của bạn.",
        "instructions": "Bạn đồng ý với mức độ nào? 'Tôi thấy mình là người...'",
        "questions": [
            { "text": "Kín đáo, ít nói", "trait": "E", "reverse": true },
            { "text": "Hay tin tưởng người khác", "trait": "A", "reverse": false },
            { "text": "Có xu hướng lười biếng", "trait": "C", "reverse": true },
            { "text": "Xử lý căng thẳng tốt", "trait": "N", "reverse": true },
            { "text": "Ít hứng thú với nghệ thuật", "trait": "O", "reverse": true },
            { "text": "Hòa đồng", "trait": "E", "reverse": false },
            { "text": "Hay bắt lỗi", "trait": "A", "reverse": true },
            { "text": "Làm việc kỹ lưỡng", "trait": "C", "reverse": false },
            { "text": "Dễ lo lắng", "trait": "N", "reverse": false },
            { "text": "Giàu trí tưởng tượng", "trait": "O", "reverse": false }
        ],
        "options": [
            { "label": "Rất không đồng", "score": 1 },
            { "label": "Không đồng ý", "score": 2 },
            { "label": "Bình thường", "score": 3 },
            { "label": "Đồng ý", "score": 4 },
            { "label": "Rất đồng ý", "score": 5 }
        ],
        "scoring_type": "bigfive",
        "scoring": {
            "traits": {
                "O": { "name": "Sẵn sàng trải nghiệm (Openness)", 
                       "high": "<strong>Não bộ của sự Khám phá:</strong> Hệ thống Dopaminergic phản ứng mạnh mẽ với sự mới lạ. Bạn tư duy phân kỳ (Divergent thinking), phá vỡ quy tắc để sáng tạo.", 
                       "low": "<strong>Não bộ của sự Ổn định:</strong> Bạn ưa thích cấu trúc và sự dễ đoán. Tư duy hội tụ (Convergent thinking) giúp bạn thực thi các quy trình một cách chính xác tuyệt đối." },
                "C": { "name": "Sự tận tâm (Conscientiousness)", 
                       "high": "<strong>Sức mạnh của Vỏ não trước trán:</strong> Khả năng kiểm soát xung động (Impulse control) cực kỳ xuất sắc. Bạn sống theo kỷ luật và định hướng mục tiêu.", 
                       "low": "<strong>Sự Linh hoạt Nhận thức:</strong> Phản ứng nhanh nhạy với sự thay đổi, nhưng dễ bị xao nhãng. Não bộ thiên về việc tận hưởng hiện tại thay vì trì hoãn sự thỏa mãn." },
                "E": { "name": "Hướng ngoại (Extraversion)", 
                       "high": "<strong>Phần thưởng Xã hội:</strong> Não bộ bạn cần lượng kích thích lớn từ bên ngoài để cảm thấy thỏa mãn. Bạn sạc năng lượng qua giao tiếp.", 
                       "low": "<strong>Hướng nội (Introversion):</strong> Đường dẫn truyền thần kinh của bạn thiên về Acetylcholine, nhạy cảm quá mức với kích thích. Bạn sạc năng lượng khi ở một mình và suy ngẫm sâu." },
                "A": { "name": "Sự dễ chịu (Agreeableness)", 
                       "high": "<strong>Hệ thống Gương Neuron (Mirror Neurons) nhạy bén:</strong> Sự đồng cảm cao, hoạt động mạnh mẽ của Oxytocin giúp bạn dễ dàng tin tưởng và kết nối với nỗi đau của người khác.", 
                       "low": "<strong>Tư duy Phản biện & Cạnh tranh:</strong> Lăng kính nhận thức lý trí, không bị cảm xúc chi phối. Phù hợp cho các vai trò đàm phán, phân tích rủi ro hoặc lãnh đạo cứng rắn." },
                "N": { "name": "Tâm lý bất ổn (Neuroticism)", 
                       "high": "<strong>Hệ thống Radar nhạy bén:</strong> Hạch hạnh nhân (Amygdala) cực kỳ nhạy cảm với các rủi ro. Bạn dễ bị lo âu, nhưng bù lại, bạn là người cẩn thận và có khả năng dự báo hiểm họa tốt nhất.", 
                       "low": "<strong>Sự Phục hồi (Resilience):</strong> Hệ thần kinh vững chãi. Bạn miễn nhiễm với hầu hết các căng thẳng thông thường, giữ được sự điềm tĩnh tuyệt đối trong khủng hoảng." }
            },
            "citations": "Dựa trên mô hình sinh học thần kinh về Tính cách của DeYoung (2010) và Big Five Inventory (BFI-10)."
        }
    },
    "pss10": {
        "id": "pss10",
        "title": "Mức độ Căng thẳng (PSS-10)",
        "description": "Đánh giá mức độ mà bạn cảm thấy cuộc sống của mình quá tải.",
        "instructions": "Trong tháng qua, mức độ thường xuyên của các cảm giác sau?",
        "questions": [
            { "text": "Tức giận vì điều gì đó bất ngờ xảy ra", "reverse": false },
            { "text": "Không thể kiểm soát những việc quan trọng", "reverse": false },
            { "text": "Cảm thấy bồn chồn và căng thẳng", "reverse": false },
            { "text": "Cảm thấy tự tin xử lý rắc rối", "reverse": true },
            { "text": "Cảm thấy mọi việc đang đi đúng hướng", "reverse": true },
            { "text": "Không thể vượt qua những khó khăn", "reverse": false },
            { "text": "Kiểm soát được sự bực tức", "reverse": true },
            { "text": "Cảm thấy mình đang làm chủ mọi thứ", "reverse": true },
            { "text": "Tức giận về những việc ngoài tầm kiểm soát", "reverse": false },
            { "text": "Khó khăn chồng chất đến mức không thể vượt qua", "reverse": false }
        ],
        "options": [
            { "label": "Không bao giờ", "score": 0 },
            { "label": "Hiếm khi", "score": 1 },
            { "label": "Thỉnh thoảng", "score": 2 },
            { "label": "Khá thường xuyên", "score": 3 },
            { "label": "Rất thường xuyên", "score": 4 }
        ],
        "scoring_type": "reverse_score",
        "scoring": {
            "ranges": [
                { "min": 0, "max": 13, "label": "Allostasis ổn định (Stress thấp)", "color": "bg-emerald-500",
                  "summary": "Bạn có chỉ số Phục hồi (Resilience) tuyệt vời trước áp lực cuộc sống.",
                  "clinical_analysis": "Cơ chế Allostasis (Sự duy trì tính ổn định qua thay đổi) của bạn đang vận hành hoàn hảo. Cortisol được giải phóng đúng lúc khi có áp lực và giảm xuống nhanh chóng. Bạn đang sử dụng 'Eustress' (Stress tích cực) làm động lực tiến lên thay vì bị nó đè bẹp.",
                  "multidimensional": {
                      "cognitive": "Tư duy <strong>Locus of Control nội tại (Kiểm soát nội bộ)</strong>: Bạn tin rằng mình có khả năng thay đổi hoàn cảnh.",
                      "behavioral": "Thích ứng nhanh, chủ động giải quyết vấn đề."
                  },
                  "roadmap": {
                      "immediate": "Không cần can thiệp.",
                      "long_term": "Tiếp tục duy trì hệ sinh thái tâm lý hiện tại (ngủ đủ giấc, các mối quan hệ chất lượng).",
                      "red_flags": "Không có."
                  },
                  "citations": "Thuyết Căng thẳng và Đối phó của Lazarus và Folkman (1984)."
                },
                { "min": 14, "max": 26, "label": "Chịu tải Căng thẳng (Stress trung bình)", "color": "bg-orange-400",
                  "summary": "Trục HPA (Hạ đồi - Tuyến yên - Tuyến thượng thận) của bạn đang phải hoạt động liên tục.",
                  "clinical_analysis": "Cơ thể bạn đang bắt đầu tích tụ các <strong>Tải trọng Allostatic (Allostatic Load)</strong>. Các tế bào miễn dịch đang bị ức chế nhẹ bởi Cortisol. Mặc dù bạn vẫn đang 'chống cự' được, nhưng năng lượng dự trữ đang cạn kiệt.",
                  "multidimensional": {
                      "cognitive": "Bắt đầu xuất hiện tư duy <strong>Trống rỗng (Mental fatigue)</strong>, khó đưa ra quyết định.",
                      "behavioral": "Sử dụng các cơ chế đối phó kém lành mạnh (ăn đồ ngọt, thức khuya trả thù - Revenge bedtime procrastination)."
                  },
                  "roadmap": {
                      "immediate": "<strong>Kỹ thuật Thở 4-7-8:</strong> Giúp kích hoạt lập tức hệ phó giao cảm.",
                      "long_term": "Liệu pháp Chấp nhận và Cam kết (ACT): Học cách 'Thả neo' trong cơn bão cảm xúc thay vì chống lại nó.",
                      "red_flags": "Bắt đầu có các cơn đau mỏi vai gáy hoặc đau dạ dày vô cớ."
                  },
                  "citations": "Nghiên cứu về Allostatic Load của McEwen (1998)."
                },
                { "min": 27, "max": 40, "label": "Suy kiệt Allostatic (Stress cao)", "color": "bg-red-500",
                  "summary": "Tình trạng cảnh báo! Căng thẳng mạn tính đang gây độc tính cho não bộ và cơ thể.",
                  "clinical_analysis": "Tình trạng <strong>Cortisol Toxicity (Nhiễm độc Cortisol)</strong>. Việc tiếp xúc với hormone căng thẳng liên tục đang thực sự làm teo nhỏ kích thước vùng Hồi hải mã (Hippocampus - trung tâm trí nhớ) và làm phì đại Hạch hạnh nhân (Amygdala - trung tâm sợ hãi).",
                  "multidimensional": {
                      "cognitive": "<strong>Tư duy Bất lực Tập nhiễm (Learned Helplessness)</strong>: Cảm giác cho dù làm gì cũng không thể thay đổi được sự tồi tệ.",
                      "behavioral": "Cáu gắt bùng nổ vô cớ, suy giảm hệ miễn dịch trầm trọng (rất hay ốm vặt)."
                  },
                  "roadmap": {
                      "immediate": "<strong>Cắt giảm toàn bộ kỳ vọng:</strong> Chấp nhận làm việc ở mức 50% công suất. Từ chối mọi yêu cầu mới (Say NO).",
                      "long_term": "Phải thiết lập lại ranh giới (Boundaries). Nếu stress đến từ môi trường độc hại, ưu tiên số 1 là rời khỏi môi trường đó.",
                      "red_flags": "Mất kiểm soát hành vi, đau thắt ngực (Takotsubo cardiomyopathy - Hội chứng trái tim tan vỡ)."
                  },
                  "citations": "Dựa trên mô hình Thang đo Căng thẳng Cảm nhận PSS (Cohen et al., 1983)."
                }
            ],
            "citations": "Perceived Stress Scale (Cohen, Kamarck, & Mermelstein, 1983)."
        }
    },
    "psqi": {
        "id": "psqi",
        "title": "Chất lượng Giấc ngủ (PSQI - Sàng lọc)",
        "description": "Đánh giá nhanh thói quen và chất lượng giấc ngủ của bạn.",
        "instructions": "Trong tháng qua...",
        "questions": [
            "Bạn phải mất hơn 30 phút mới đi vào giấc ngủ?",
            "Bạn hay bị thức giấc giữa đêm hoặc sáng sớm?",
            "Bạn cảm thấy buồn ngủ vào ban ngày khi làm việc?",
            "Bạn có phải dùng thuốc (kê đơn hoặc không) để ngủ?",
            "Đánh giá tổng thể, chất lượng giấc ngủ của bạn là tệ?"
        ],
        "options": [
            { "label": "Không bao giờ", "score": 0 },
            { "label": "Dưới 1 lần/tuần", "score": 1 },
            { "label": "1-2 lần/tuần", "score": 2 },
            { "label": "Từ 3 lần/tuần trở lên", "score": 3 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 4, "label": "Giấc ngủ Kiến tạo (Restorative Sleep)", "color": "bg-emerald-500",
                  "summary": "Chu kỳ sinh học (Circadian Rhythm) của bạn đang hoạt động tuyệt vời.",
                  "clinical_analysis": "Não bộ của bạn có khả năng đi sâu vào giai đoạn <strong>Slow-Wave Sleep (Giấc ngủ sóng chậm N3)</strong> và <strong>REM (Rapid Eye Movement)</strong> một cách mượt mà. Hệ thống Glymphatic (hệ thống dọn rác của não) đang hoạt động hết công suất để loại bỏ các mảng bám Beta-amyloid, bảo vệ bạn khỏi suy giảm trí nhớ.",
                  "multidimensional": {
                      "cognitive": "Tinh thần minh mẫn, khả năng củng cố trí nhớ (Memory consolidation) tốt.",
                      "behavioral": "Thức dậy với năng lượng sảng khoái mà không cần phụ thuộc nhiều vào caffeine."
                  },
                  "roadmap": {
                      "immediate": "Không cần thay đổi.",
                      "long_term": "Tiếp tục duy trì vệ sinh giấc ngủ (Sleep hygiene) như hiện tại.",
                      "red_flags": "Không có."
                  },
                  "citations": "Dựa trên nghiên cứu sinh lý học Giấc ngủ của Matthew Walker."
                },
                { "min": 5, "max": 9, "label": "Rối loạn Nhịp Sinh học", "color": "bg-orange-500",
                  "summary": "Chất lượng giấc ngủ đang bị phân mảnh, bạn không đi sâu vào giấc ngủ phục hồi.",
                  "clinical_analysis": "Sự ức chế tiết <strong>Melatonin</strong> (hormone bóng tối) do tiếp xúc ánh sáng xanh ban đêm, hoặc nồng độ Cortisol quá cao vào buổi tối ngăn cản quá trình thư giãn. Kết quả là não bạn liên tục bị đánh thức nhẹ ở giai đoạn N1 và N2 (Micro-arousals), khiến bạn luôn thấy lờ đờ vào sáng hôm sau.",
                  "multidimensional": {
                      "cognitive": "Xuất hiện <strong>Sương mù não (Brain fog)</strong> nhẹ, khó tập trung vào buổi chiều.",
                      "behavioral": "Lạm dụng Caffeine (uống cà phê sau 2h chiều), lướt điện thoại trên giường (Bed-rotting)."
                  },
                  "roadmap": {
                      "immediate": "<strong>Liệu pháp Vệ sinh Giấc ngủ (Sleep Hygiene):</strong> Không thiết bị điện tử 1 tiếng trước khi ngủ. Giường chỉ dành cho 2 việc: Ngủ và Tình dục.",
                      "long_term": "Liệu pháp Kiểm soát Kích thích (Stimulus Control Therapy): Nếu nằm 20 phút không ngủ được, hãy ra khỏi giường, đọc sách dưới ánh sáng yếu cho đến khi buồn ngủ rồi mới quay lại.",
                      "red_flags": "Thức giấc lúc 3-4h sáng và không thể ngủ lại (dấu hiệu của trầm cảm tiềm ẩn)."
                  },
                  "citations": "Tiêu chuẩn lâm sàng của Hiệp hội Giấc ngủ Hoa Kỳ (AASM)."
                },
                { "min": 10, "max": 15, "label": "Mất ngủ Mạn tính (Chronic Insomnia)", "color": "bg-red-500",
                  "summary": "Tình trạng thiếu ngủ đang tàn phá sức khỏe thể chất và tâm thần của bạn.",
                  "clinical_analysis": "Sự <strong>Bức bối tâm lý (Psychophysiological Insomnia)</strong>. Chính chiếc giường đã trở thành một 'kích thích gây lo âu'. Não bộ học được một phản xạ có điều kiện: Cứ lên giường là phải suy nghĩ và hoảng loạn, thay vì thư giãn. Việc thiếu ngủ REM trầm trọng làm hệ thống điều chỉnh cảm xúc của bạn suy sụp.",
                  "multidimensional": {
                      "cognitive": "<strong>Ám ảnh về giấc ngủ:</strong> Liên tục xem đồng hồ tính xem còn được ngủ bao nhiêu tiếng.",
                      "behavioral": "Cố gắng ép bản thân ngủ (càng cố càng thức), lạm dụng thuốc ngủ không kê đơn gây hiệu ứng dung nạp (Tolerance)."
                  },
                  "roadmap": {
                      "immediate": "Ngừng ngay việc tự ý dùng thuốc ngủ (Melatonin liều cao hoặc thuốc kháng Histamine).",
                      "long_term": "Cần can thiệp chuyên sâu bằng <strong>CBT-I (Liệu pháp Nhận thức Hành vi cho Mất ngủ)</strong> bao gồm kỹ thuật 'Hạn chế giấc ngủ' (Sleep Restriction) dưới sự theo dõi của chuyên gia.",
                      "red_flags": "Xuất hiện ảo giác nhẹ, hoặc ngủ gục trong lúc đang lái xe (Microsleep)."
                  },
                  "citations": "Dựa trên Pittsburgh Sleep Quality Index (Buysse et al., 1989) và phác đồ CBT-I."
                }
            ],
            "citations": "Phiên bản sàng lọc dựa trên Chỉ số Chất lượng Giấc ngủ Pittsburgh (PSQI)."
        }
    },
    "asrs": {
        "id": "asrs",
        "title": "Sàng lọc ADHD (ASRS v1.1)",
        "description": "Bộ 6 câu hỏi sàng lọc Rối loạn tăng động giảm chú ý ở người lớn.",
        "instructions": "Trong 6 tháng qua...",
        "questions": [
            "Bạn có hay gặp khó khăn trong việc tập trung vào chi tiết, hoặc hay mắc lỗi cẩu thả?",
            "Bạn có hay khó khăn trong việc duy trì sự chú ý vào các công việc đang làm?",
            "Bạn có hay quên các cuộc hẹn hoặc nghĩa vụ không?",
            "Bạn có hay trì hoãn các việc đòi hỏi tư duy hoặc sự tổ chức?",
            "Bạn có hay bồn chồn, tay chân phải cử động liên tục khi phải ngồi yên?",
            "Bạn có cảm thấy như mình bị điều khiển bởi một 'động cơ' lúc nào cũng phải hoạt động?"
        ],
        "options": [
            { "label": "Không bao giờ", "score": 0 },
            { "label": "Hiếm khi", "score": 1 },
            { "label": "Thỉnh thoảng", "score": 2 },
            { "label": "Thường xuyên", "score": 3 },
            { "label": "Rất thường xuyên", "score": 4 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 11, "label": "Không có khả năng ADHD", "color": "bg-emerald-500",
                  "summary": "Chức năng điều hành (Executive Functioning) của bạn hoạt động rất tốt.",
                  "clinical_analysis": "Vỏ não trước trán (Prefrontal Cortex) của bạn kiểm soát xuất sắc các xung động. Lượng Dopamine cơ bản (Baseline Dopamine) đủ để duy trì sự chú ý vào các công việc nhàm chán mà không cần kích thích mạnh.",
                  "multidimensional": {
                      "cognitive": "Khả năng tư duy tuyến tính, tổ chức luồng suy nghĩ rõ ràng.",
                      "behavioral": "Hoàn thành công việc đúng hạn (Meet deadlines) mà không cần áp lực phút chót."
                  },
                  "roadmap": {
                      "immediate": "Duy trì các phương pháp quản lý thời gian hiện tại.",
                      "long_term": "Tiếp tục áp dụng các thói quen tốt.",
                      "red_flags": "Không có."
                  },
                  "citations": "Dựa trên tiêu chuẩn đánh giá Chức năng điều hành của Barkley (1997)."
                },
                { "min": 12, "max": 16, "label": "Thiếu hụt Dopamine (Nguy cơ)", "color": "bg-orange-400",
                  "summary": "Bạn gặp khó khăn lớn trong việc khởi động các công việc nhàm chán.",
                  "clinical_analysis": "Hệ thống phần thưởng (Reward system) của bạn có ngưỡng kích hoạt cao hơn bình thường. Bạn thường rơi vào tình trạng <strong>Tê liệt chức năng điều hành (Executive Dysfunction)</strong>: Mặc dù trong đầu biết rất rõ cần phải làm gì, nhưng cơ thể lại từ chối thực hiện cho đến khi xuất hiện kích thích tột độ (ví dụ: sát Deadline).",
                  "multidimensional": {
                      "cognitive": "<strong>Tư duy Tất cả-hoặc-Không có gì:</strong> 'Nếu không làm hoàn hảo, thà không làm'.",
                      "behavioral": "Doomscrolling (lướt điện thoại vô thức) để tìm kiếm Dopamine rẻ tiền, trì hoãn mạn tính."
                  },
                  "roadmap": {
                      "immediate": "<strong>Kỹ thuật Body Doubling:</strong> Làm việc cùng không gian với một người khác (kể cả qua Zoom) để tạo áp lực hiện diện.",
                      "long_term": "Sử dụng Phương pháp Pomodoro (25 phút làm - 5 phút nghỉ) để tạo các 'Deadline vi mô' đánh lừa não bộ.",
                      "red_flags": "Sự trì hoãn bắt đầu gây thiệt hại nghiêm trọng đến tài chính hoặc công việc."
                  },
                  "citations": "Khái niệm Executive Dysfunction trong Tâm lý học Thần kinh."
                },
                { "min": 17, "max": 24, "label": "Dấu hiệu rõ rệt của ADHD (Cần chẩn đoán)", "color": "bg-red-500",
                  "summary": "Não bộ của bạn được cấu trúc theo một cách rất khác biệt (Neurodivergent).",
                  "clinical_analysis": "Đây không phải là sự lười biếng. Đây là sự <strong>Thiếu hụt mạn tính chất dẫn truyền thần kinh Dopamine và Noradrenaline</strong> ở các vùng não quản lý sự chú ý. Bạn sống trong trạng thái 'Thiếu kích thích' (Understimulated), dẫn đến việc não tự động tìm kiếm các kích thích bằng cách: Bồn chồn tay chân, nhún nhảy (Stimming), hoặc nhảy từ luồng suy nghĩ này sang suy nghĩ khác.",
                  "multidimensional": {
                      "cognitive": "<strong>Hyperfocus (Tập trung cực độ):</strong> Có thể tập trung 10 tiếng không ăn uống vào việc mình thích, nhưng không thể dành 10 phút cho việc mình chán. Mù thời gian (Time Blindness).",
                      "behavioral": "Ngắt lời người khác vô thức, dễ nổi nóng, kỹ năng tổ chức môi trường sống rất kém (phòng ốc bừa bộn)."
                  },
                  "roadmap": {
                      "immediate": "Ngừng dán nhãn bản thân là 'Kẻ lười biếng hay vô trách nhiệm'. Bạn sở hữu một hệ điều hành khác, cần các công cụ khác.",
                      "long_term": "Cần chẩn đoán Y khoa từ Bác sĩ tâm thần. Các loại thuốc kích thích thần kinh (Stimulants) kết hợp với CBT (Tái cấu trúc môi trường) có thể thay đổi hoàn toàn cuộc sống của bạn.",
                      "red_flags": "Thường xuyên gây tai nạn do bất cẩn, lạm dụng chất kích thích (Caffeine, Nicotine) để tự chữa lành (Self-medicating)."
                  },
                  "citations": "Adult ADHD Self-Report Scale (ASRS-v1.1) của Tổ chức Y tế Thế giới (WHO) & Tiêu chuẩn DSM-5."
                }
            ],
            "citations": "Thang đo ASRS v1.1 của WHO."
        }
    },
    "eq": {
        "id": "eq",
        "title": "Trí tuệ Cảm xúc (EQ)",
        "description": "Đánh giá khả năng nhận thức và quản lý cảm xúc của bản thân và người khác.",
        "instructions": "Đánh giá mức độ đồng ý của bạn...",
        "questions": [
            { "text": "Tôi biết rõ cảm xúc của mình vào mọi thời điểm.", "reverse": false },
            { "text": "Tôi gặp khó khăn khi hiểu cảm xúc của người khác.", "reverse": true },
            { "text": "Tôi thường dễ dàng kiểm soát sự tức giận.", "reverse": false },
            { "text": "Tôi biết cách làm người khác cảm thấy tốt hơn khi họ buồn.", "reverse": false },
            { "text": "Tôi hành động bốc đồng và sau đó hối hận.", "reverse": true },
            { "text": "Tôi là một người biết lắng nghe và đồng cảm.", "reverse": false }
        ],
        "options": [
            { "label": "Rất không đồng ý", "score": 1 },
            { "label": "Không đồng ý", "score": 2 },
            { "label": "Bình thường", "score": 3 },
            { "label": "Đồng ý", "score": 4 },
            { "label": "Rất đồng ý", "score": 5 }
        ],
        "scoring_type": "reverse_score",
        "scoring": {
            "ranges": [
                { "min": 6, "max": 14, "label": "Tắc nghẽn Cảm xúc (Alexithymia nhẹ)", "color": "bg-red-400",
                  "summary": "Bạn đang bị ngắt kết nối với tín hiệu cảm xúc của chính mình.",
                  "clinical_analysis": "Đường dẫn truyền thần kinh giữa <strong>Hệ viền (cảm xúc)</strong> và <strong>Vỏ não trước trán (ngôn ngữ/nhận thức)</strong> đang bị mờ nhạt. Hiện tượng này gần giống với Alexithymia (Mù cảm xúc): Bạn cảm thấy khó chịu trong cơ thể nhưng không thể gọi tên chính xác đó là tức giận, buồn bã hay sợ hãi.",
                  "multidimensional": {
                      "cognitive": "Tư duy quá lý trí, cho rằng cảm xúc là sự yếu đuối không cần thiết.",
                      "behavioral": "Thường phản ứng theo bản năng (bùng nổ hoặc né tránh) thay vì phản hồi một cách có suy nghĩ."
                  },
                  "roadmap": {
                      "immediate": "Sử dụng <strong>Bánh xe Cảm xúc (Emotion Wheel)</strong>: Mỗi khi thấy bứt rứt, hãy nhìn vào bánh xe và cố gắng chọn ra 3 từ mô tả đúng nhất.",
                      "long_term": "Thực hành Chánh niệm (Mindfulness): Quan sát cảm xúc đến và đi mà không phán xét chúng.",
                      "red_flags": "Thường xuyên có các xung đột phá vỡ các mối quan hệ quan trọng."
                  },
                  "citations": "Mô hình Trí tuệ Cảm xúc của Daniel Goleman (1995)."
                },
                { "min": 15, "max": 24, "label": "Nhận thức Cảm xúc Trung bình", "color": "bg-yellow-500",
                  "summary": "Bạn hiểu được người khác, nhưng đôi khi vẫn bị cảm xúc của chính mình đánh bại.",
                  "clinical_analysis": "Hệ thống <strong>Gương Neuron (Mirror Neurons)</strong> của bạn hoạt động tốt, giúp bạn đọc vị được các tín hiệu phi ngôn ngữ của người khác. Tuy nhiên, khả năng Tự điều chỉnh (Self-regulation) vẫn chưa hoàn thiện, đôi khi sự kích hoạt quá mạnh của Amygdala vẫn chiếm quyền kiểm soát (Amygdala Hijack).",
                  "multidimensional": {
                      "cognitive": "Biết mình sai nhưng trong lúc nóng giận không thể dừng lại được.",
                      "behavioral": "Có khả năng lắng nghe và đồng cảm, nhưng dễ bị 'lây nhiễm cảm xúc' (Emotional contagion) từ môi trường xung quanh."
                  },
                  "roadmap": {
                      "immediate": "<strong>Quy tắc 6 giây:</strong> Hóa chất của một cảm xúc mất khoảng 6 giây để bị phân hủy trong não. Hãy đếm đến 6 trước khi nói ra lời cay đắng.",
                      "long_term": "Luyện tập Kỹ năng Lắng nghe chủ động (Active Listening) và Xác thực cảm xúc (Validation) trong giao tiếp.",
                      "red_flags": "Bị kiệt sức vì phải hấp thụ quá nhiều cảm xúc tiêu cực từ người khác."
                  },
                  "citations": "Thuyết Tự điều chỉnh Cảm xúc (Gross, 1998)."
                },
                { "min": 25, "max": 30, "label": "Trí tuệ Cảm xúc Cao", "color": "bg-emerald-500",
                  "summary": "Bạn là bậc thầy trong việc lướt trên những ngọn sóng của cảm xúc.",
                  "clinical_analysis": "Sự đồng bộ hóa hoàn hảo giữa Vỏ não trước trán (Lý trí) và Hệ viền (Cảm xúc). Bạn sở hữu <strong>Độ dẻo dai cảm xúc (Emotional Agility)</strong>: Khả năng tạo ra một 'khoảng trống' (space) giữa Kích thích (Stimulus) và Phản hồi (Response).",
                  "multidimensional": {
                      "cognitive": "Nhận thức rõ: 'Mình đang trải nghiệm cảm giác tức giận' thay vì 'Mình là sự tức giận'.",
                      "behavioral": "Kỹ năng thiết lập ranh giới (Boundaries) tốt, giao tiếp Quyết đoán (Assertive communication)."
                  },
                  "roadmap": {
                      "immediate": "Tiếp tục sử dụng năng lượng này để truyền cảm hứng cho người khác.",
                      "long_term": "Trở thành người hướng dẫn (Mentor) hoặc thực hành vai trò hòa giải trong cộng đồng.",
                      "red_flags": "Tránh rơi vào cạm bẫy của việc 'thao túng tâm lý' (Manipulation) vì bạn quá hiểu bản chất con người."
                  },
                  "citations": "Mô hình Trait Emotional Intelligence (Petrides, 2001)."
                }
            ],
            "citations": "Nền tảng từ Schutte Self Report Emotional Intelligence Test (SSREIT)."
        }
    },
    "mbi": {
        "id": "mbi",
        "title": "Hội chứng Burnout (Kiệt sức Nghề nghiệp)",
        "description": "Đánh giá mức độ cạn kiệt năng lượng thể chất và tinh thần do công việc.",
        "instructions": "Mức độ thường xuyên bạn cảm thấy...",
        "questions": [
            "Tôi cảm thấy kiệt quệ về mặt cảm xúc vì công việc.",
            "Tôi cảm thấy mệt mỏi ngay từ lúc thức dậy khi nghĩ đến công việc.",
            "Tôi cảm thấy mình đang đối xử với mọi người như những cỗ máy.",
            "Tôi đã trở nên vô cảm, hoài nghi hơn về công việc.",
            "Tôi cảm thấy không đạt được thành tựu gì đáng kể.",
            "Làm việc với mọi người cả ngày khiến tôi vô cùng căng thẳng."
        ],
        "options": [
            { "label": "Chưa bao giờ", "score": 0 },
            { "label": "Vài lần/tháng", "score": 1 },
            { "label": "Vài lần/tuần", "score": 2 },
            { "label": "Mỗi ngày", "score": 3 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 5, "label": "Gắn kết & Năng lượng (Engagement)", "color": "bg-emerald-500",
                  "summary": "Bạn đang ở trạng thái 'Flow' (Dòng chảy) tuyệt vời trong công việc.",
                  "clinical_analysis": "Hệ thống Dopaminergic (động lực) và Serotonergic (sự hài lòng) đang được nạp đầy. Bạn đang trải nghiệm cảm giác Tự hiệu quả (Self-Efficacy), tin tưởng vào giá trị mình tạo ra.",
                  "multidimensional": {
                      "cognitive": "Tư duy phát triển (Growth Mindset), nhìn nhận thử thách là cơ hội.",
                      "behavioral": "Sự cam kết cao, hòa đồng với đồng nghiệp."
                  },
                  "roadmap": {
                      "immediate": "Giữ vững sự cân bằng hiện tại.",
                      "long_term": "Liên tục cập nhật kỹ năng mới để tránh sự nhàm chán (Boreout).",
                      "red_flags": "Không có."
                  },
                  "citations": "Khái niệm Flow của Mihaly Csikszentmihalyi (1990)."
                },
                { "min": 6, "max": 11, "label": "Nguy cơ Burnout Tiềm ẩn", "color": "bg-orange-500",
                  "summary": "Đèn vàng cảnh báo: Năng lượng dự trữ của bạn đang vơi đi nhanh chóng.",
                  "clinical_analysis": "Tình trạng <strong>Mệt mỏi Cảm xúc (Emotional Exhaustion)</strong>. Não bộ phải sử dụng quá nhiều năng lượng để giả vờ vui vẻ hoặc đối phó với môi trường làm việc độc hại. Việc thiếu phần thưởng tương xứng (Vật chất/Tinh thần) làm giảm lượng Dopamine.",
                  "multidimensional": {
                      "cognitive": "Bắt đầu xuất hiện tư duy <strong>Hoài nghi (Cynicism)</strong>: 'Cố gắng thế này để làm gì?'",
                      "behavioral": "Đi làm trễ, chỉ làm đúng phận sự (Quiet Quitting), dễ nổi cáu với đồng nghiệp/khách hàng."
                  },
                  "roadmap": {
                      "immediate": "<strong>Tách bạch nghiêm ngặt:</strong> Tắt mọi thông báo công việc sau giờ hành chính. Không mang việc về nhà.",
                      "long_term": "Tái đánh giá lại Sự phù hợp (Person-Environment Fit): Công việc này có còn phù hợp với giá trị cốt lõi của bạn?",
                      "red_flags": "Cảm giác rùng mình hoặc buồn nôn mỗi sáng Chủ nhật khi nghĩ đến ngày thứ Hai (Sunday Scaries)."
                  },
                  "citations": "Mô hình Burnout Đa chiều của Christina Maslach (1981)."
                },
                { "min": 12, "max": 18, "label": "Kiệt sức Nghề nghiệp Hoàn toàn", "color": "bg-red-600",
                  "summary": "Hệ thống của bạn đã sập nguồn. Đây là một chấn thương tâm lý, không phải sự lười biếng.",
                  "clinical_analysis": "Đây là giai đoạn cuối: <strong>Suy giảm thành tựu cá nhân (Reduced Professional Efficacy)</strong> và <strong>Phi nhân cách hóa (Depersonalization)</strong>. Cơ thể bạn đang đình công. Phản ứng viêm hệ thống do stress mạn tính có thể đang tàn phá sức khỏe thể chất (đau dạ dày, rối loạn tự miễn).",
                  "multidimensional": {
                      "cognitive": "<strong>Bất lực hoàn toàn:</strong> Cảm thấy bản thân hoàn toàn vô dụng, mất hết ý nghĩa cuộc sống.",
                      "behavioral": "Cách ly xã hội, hành vi chống đối ngầm, khóc vô cớ, hoặc ngược lại - trở nên vô cảm như một cỗ máy (Numbness)."
                  },
                  "roadmap": {
                      "immediate": "<strong>Cần dừng lại NGAY LẬP TỨC.</strong> Nghỉ ốm (Sick leave) hoặc xin nghỉ phép không lương. Tâm trí bạn cần được chăm sóc đặc biệt y như một người vừa trải qua cơn phẫu thuật.",
                      "long_term": "Đôi khi phương thuốc duy nhất là <strong>Từ bỏ (Resignation)</strong>. Nếu môi trường quá độc hại, không một liệu pháp tâm lý nào có thể bảo vệ bạn nếu bạn vẫn ở lại.",
                      "red_flags": "Ý nghĩ tự sát liên quan đến áp lực công việc (Workplace Suicide Risk)."
                  },
                  "citations": "Maslach Burnout Inventory (MBI) được công nhận bởi Tổ chức Y tế Thế giới (WHO)."
                }
            ],
            "citations": "Dựa trên mô hình Maslach Burnout Inventory (MBI)."
        }
    },
    "rses": {
        "id": "rses",
        "title": "Lòng Tự trọng (RSES)",
        "description": "Thang đo Rosenberg về giá trị bản thân.",
        "instructions": "Mức độ đồng ý của bạn...",
        "questions": [
            { "text": "Nhìn chung, tôi hài lòng với bản thân mình.", "reverse": false },
            { "text": "Tôi thường cảm thấy mình là người thất bại.", "reverse": true },
            { "text": "Tôi cảm thấy mình có một số phẩm chất tốt.", "reverse": false },
            { "text": "Tôi ước mình có thể tôn trọng bản thân hơn.", "reverse": true },
            { "text": "Tôi có thái độ tích cực về chính mình.", "reverse": false },
            { "text": "Đôi khi tôi cảm thấy mình hoàn toàn vô dụng.", "reverse": true }
        ],
        "options": [
            { "label": "Rất không đồng ý", "score": 1 },
            { "label": "Không đồng ý", "score": 2 },
            { "label": "Đồng ý", "score": 3 },
            { "label": "Rất đồng ý", "score": 4 }
        ],
        "scoring_type": "reverse_score",
        "scoring": {
            "ranges": [
                { "min": 6, "max": 14, "label": "Lòng tự trọng Thấp", "color": "bg-red-400",
                  "summary": "Bạn đang mang một kẻ chỉ trích tàn nhẫn (Inner Critic) bên trong mình.",
                  "clinical_analysis": "Não bộ của bạn có xu hướng mắc kẹt trong <strong>Thiên kiến Tiêu cực (Negativity Bias)</strong>. Các mạng lưới thần kinh mặc định (DMN) liên tục phát lại những sai lầm trong quá khứ (Rumination). Bạn có xu hướng đánh đồng giá trị con người mình với những thất bại tạm thời.",
                  "multidimensional": {
                      "cognitive": "<strong>Nhìn thấu tâm can (Mind Reading):</strong> Luôn tin rằng người khác đang phán xét mình một cách tiêu cực dù không có bằng chứng.",
                      "behavioral": "Né tránh cơ hội (Sợ thất bại), hội chứng kẻ mạo danh (Imposter Syndrome), khao khát làm hài lòng người khác (People-pleasing)."
                  },
                  "roadmap": {
                      "immediate": "<strong>Thực hành Lòng trắc ẩn (Self-Compassion):</strong> Hãy nói chuyện với chính mình theo cách bạn sẽ nói với một người bạn thân đang gặp khó khăn.",
                      "long_term": "Liệu pháp CBT: Phân biệt rõ giữa 'Tôi ĐÃ làm một việc ngu ngốc' và 'Tôi LÀ một kẻ ngu ngốc'.",
                      "red_flags": "Trầm cảm thứ phát do cảm giác vô dụng kéo dài."
                  },
                  "citations": "Thuyết Self-Compassion của Kristin Neff (2003)."
                },
                { "min": 15, "max": 20, "label": "Lòng tự trọng Trung bình", "color": "bg-yellow-500",
                  "summary": "Giá trị bản thân của bạn đang phụ thuộc nhiều vào yếu tố bên ngoài.",
                  "clinical_analysis": "Bạn sở hữu <strong>Lòng tự trọng có điều kiện (Contingent Self-Esteem)</strong>. Nghĩa là bạn chỉ cảm thấy tốt về mình khi đạt được thành tựu, được khen ngợi hoặc khi người khác công nhận. Khi thiếu vắng phần thưởng này, sự tự tin của bạn dao động.",
                  "multidimensional": {
                      "cognitive": "Sự so sánh xã hội (Social Comparison) thường xuyên, đặc biệt trên mạng xã hội.",
                      "behavioral": "Làm việc quá sức để chứng minh giá trị, nhạy cảm với lời phê bình."
                  },
                  "roadmap": {
                      "immediate": "Giảm thời gian sử dụng mạng xã hội để cắt đứt vòng lặp so sánh vô hạn.",
                      "long_term": "Chuyển từ Lòng tự trọng (Self-Esteem) sang <strong>Sự tự chấp nhận vô điều kiện (Unconditional Self-Acceptance)</strong> - học thuyết của Albert Ellis.",
                      "red_flags": "Sự sụp đổ niềm tin khi gặp một thất bại lớn."
                  },
                  "citations": "Nghiên cứu về Contingent Self-Esteem của Crocker & Wolfe (2001)."
                },
                { "min": 21, "max": 24, "label": "Lòng tự trọng Lành mạnh", "color": "bg-emerald-500",
                  "summary": "Bạn có một lõi nhận thức vững chắc về giá trị cốt lõi của mình.",
                  "clinical_analysis": "Bạn sở hữu <strong>Lòng tự trọng an toàn (Secure Self-Esteem)</strong>. Vỏ não trước trán của bạn duy trì được một hình ảnh cái tôi (Self-schema) ổn định. Sự tự tin của bạn xuất phát từ bên trong (Intrinsic), không bị lung lay bởi lời chê bai hay sự tâng bốc.",
                  "multidimensional": {
                      "cognitive": "Chấp nhận sự không hoàn hảo. Nhìn nhận thất bại là dữ liệu (Data) để học hỏi chứ không phải là bản án về nhân cách.",
                      "behavioral": "Dám bảo vệ ý kiến cá nhân, dễ dàng nhận lỗi khi sai mà không cảm thấy nhục nhã."
                  },
                  "roadmap": {
                      "immediate": "Hãy chia sẻ sự tự tin lành mạnh này đến những người xung quanh.",
                      "long_term": "Tránh để sự tự tin biến thành <strong>Sự kiêu ngạo / Ái kỷ (Narcissism)</strong> bằng cách luôn duy trì sự khiêm nhường trí tuệ (Intellectual Humility).",
                      "red_flags": "Không có."
                  },
                  "citations": "Rosenberg Self-Esteem Scale (RSES, 1965)."
                }
            ],
            "citations": "Thang đo Rosenberg Self-Esteem Scale (1965)."
        }
    },
    "ybocs": {
        "id": "ybocs",
        "title": "Ám ảnh cưỡng chế (OCD)",
        "description": "Sàng lọc sự hiện diện của các suy nghĩ ám ảnh và hành vi cưỡng chế.",
        "instructions": "Trong tháng qua...",
        "questions": [
            "Bạn có những suy nghĩ, hình ảnh lặp đi lặp lại không mong muốn gây khó chịu?",
            "Bạn phải thực hiện một số hành vi (rửa tay, kiểm tra cửa) lặp đi lặp lại để bớt lo lắng?",
            "Những suy nghĩ/hành vi này tiêu tốn của bạn hơn 1 giờ mỗi ngày?",
            "Việc thực hiện các hành vi này có làm ảnh hưởng đến công việc, sinh hoạt?",
            "Bạn cảm thấy mình không thể kiểm soát được những suy nghĩ và hành vi này?"
        ],
        "options": [
            { "label": "Không có", "score": 0 },
            { "label": "Nhẹ", "score": 1 },
            { "label": "Vừa", "score": 2 },
            { "label": "Nặng", "score": 3 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 4, "label": "Triệu chứng Dưới ngưỡng", "color": "bg-emerald-500",
                  "summary": "Bạn có thể là người cẩn thận, nhưng không mắc chứng OCD.",
                  "clinical_analysis": "Não bộ của tất cả mọi người đều tạo ra những suy nghĩ kỳ quặc (Intrusive thoughts) mỗi ngày. Tuy nhiên, hệ thống nhận thức của bạn có khả năng 'gạt bỏ' chúng một cách bình thường như rác thải tâm trí, không gắn ý nghĩa nguy hiểm cho chúng.",
                  "multidimensional": {
                      "cognitive": "Nhận thức linh hoạt, không bị dính mắc (Cognitive defusion).",
                      "behavioral": "Kiểm tra cửa 1 lần rồi đi ngủ bình thường."
                  },
                  "roadmap": {
                      "immediate": "Không cần can thiệp.",
                      "long_term": "Duy trì sự linh hoạt tâm lý.",
                      "red_flags": "Không có."
                  },
                  "citations": "Tiêu chuẩn chẩn đoán Obsessive-Compulsive Disorder theo DSM-5."
                },
                { "min": 5, "max": 9, "label": "OCD Nhẹ đến Vừa", "color": "bg-yellow-500",
                  "summary": "Những vòng lặp suy nghĩ đang bắt đầu đánh cắp thời gian của bạn.",
                  "clinical_analysis": "Có sự tăng động ở <strong>Hạch nền (Basal Ganglia)</strong> và <strong>Vỏ não hốc mắt trán (Orbitofrontal Cortex)</strong>. Mạch não này đóng vai trò cảnh báo sai lệch (Lỗi hệ thống). Bạn cảm thấy có điều gì đó 'chưa đúng' (Not just right experience) và buộc phải thực hiện các hành vi cưỡng chế (Compulsions) để làm dịu cơn lo âu tạm thời.",
                  "multidimensional": {
                      "cognitive": "<strong>Hòa nhập Tư duy-Hành động (Thought-Action Fusion):</strong> Tin rằng chỉ cần nghĩ về một điều tồi tệ thì điều đó sẽ trở thành sự thật.",
                      "behavioral": "Trì hoãn, tốn hàng giờ cho các nghi thức (rửa tay, đếm số, sắp xếp đồ vật đối xứng)."
                  },
                  "roadmap": {
                      "immediate": "<strong>Phá vỡ vòng lặp:</strong> Lần tới khi não ra lệnh phải kiểm tra khóa cửa lần thứ 3, hãy cố gắng trì hoãn hành động đó thêm 5 phút.",
                      "long_term": "Hiểu rằng: Hành vi cưỡng chế là 'thức ăn' của sự ám ảnh. Càng làm theo, OCD càng mạnh lên.",
                      "red_flags": "Bắt đầu né tránh các hoạt động thường ngày vì sợ kích hoạt nỗi ám ảnh."
                  },
                  "citations": "Mô hình Nhận thức Hành vi về OCD của Salkovskis (1985)."
                },
                { "min": 10, "max": 15, "label": "OCD Mức độ Nặng", "color": "bg-red-500",
                  "summary": "Con quái vật OCD đang giam cầm bạn trong một nhà tù do chính tâm trí tạo ra.",
                  "clinical_analysis": "Não bộ của bạn đang bị mắc kẹt hoàn toàn (Neurological Lock). Sự lo âu do các suy nghĩ ám ảnh (Obsessions) tạo ra mãnh liệt đến mức các hành vi cưỡng chế trở thành mệnh lệnh sinh tử. Sự đau đớn tâm lý này rất thực tế và tàn khốc.",
                  "multidimensional": {
                      "cognitive": "Sự nghi ngờ bệnh lý (Pathological doubt): Hoàn toàn không còn tin tưởng vào trí nhớ hay giác quan của chính mình ('Tôi có tông trúng ai khi lái xe không?').",
                      "behavioral": "Các nghi thức cưỡng chế cực đoan tàn phá sức khỏe thể chất (rửa tay đến chảy máu) hoặc làm gián đoạn hoàn toàn công việc."
                  },
                  "roadmap": {
                      "immediate": "Ngừng tự trách bản thân. Bạn không điên. Đây là một rối loạn sinh học thần kinh có thể điều trị được.",
                      "long_term": "CẦN ĐIỀU TRỊ CHUYÊN SÂU. Tiêu chuẩn Vàng là <strong>ERP (Liệu pháp Tiếp xúc và Ngăn ngừa Phản ứng)</strong> kết hợp thuốc SSRI liều cao. Bác sĩ sẽ giúp bạn đối mặt với nỗi sợ mà không thực hiện hành vi cưỡng chế.",
                      "red_flags": "Nguy cơ trầm cảm thứ phát nghiêm trọng do kiệt quệ đấu tranh với OCD."
                  },
                  "citations": "Yale-Brown Obsessive Compulsive Scale (Y-BOCS) (Goodman et al., 1989)."
                }
            ],
            "citations": "Dựa trên Bảng hỏi Yale-Brown (Y-BOCS)."
        }
    }
};
