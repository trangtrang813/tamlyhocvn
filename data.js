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
                { "min": 0, "max": 4, "label": "Bình thường", "color": "bg-emerald-500", 
                  "summary": "Bạn hiện không có biểu hiện trầm cảm rõ rệt.",
                  "strengths": ["Khả năng duy trì cảm xúc ổn định.", "Đủ năng lượng cho các hoạt động thường ngày."],
                  "weaknesses": ["Không có dấu hiệu rủi ro đáng kể hiện tại."],
                  "advice": "Hãy tiếp tục duy trì thói quen sinh hoạt lành mạnh." },
                { "min": 5, "max": 9, "label": "Trầm cảm nhẹ", "color": "bg-yellow-400",
                  "summary": "Bạn đang trải qua một số triệu chứng trầm cảm nhẹ.",
                  "strengths": ["Vẫn duy trì được chức năng sinh hoạt cơ bản."],
                  "weaknesses": ["Có dấu hiệu mệt mỏi tinh thần.", "Dễ bị tổn thương trước áp lực."],
                  "advice": "Chú ý tự chăm sóc bản thân, ngủ đủ giấc. Chia sẻ với người thân nếu cần." },
                { "min": 10, "max": 14, "label": "Trầm cảm vừa", "color": "bg-orange-500",
                  "summary": "Các triệu chứng trầm cảm đang ở mức vừa, bắt đầu ảnh hưởng đến cuộc sống.",
                  "strengths": ["Bạn nhận thức được sự thay đổi trong tâm trạng của mình."],
                  "weaknesses": ["Suy giảm động lực làm việc.", "Thay đổi thói quen ăn ngủ."],
                  "advice": "Cân nhắc trò chuyện với chuyên gia tâm lý để có kế hoạch hỗ trợ." },
                { "min": 15, "max": 27, "label": "Trầm cảm nặng", "color": "bg-red-500",
                  "summary": "Mức độ cảnh báo cao. Trầm cảm đang ảnh hưởng nghiêm trọng đến bạn.",
                  "strengths": ["Việc hoàn thành bài test này cho thấy bạn đang tìm kiếm sự giúp đỡ."],
                  "weaknesses": ["Nguy cơ kiệt quệ tinh thần hoàn toàn.", "Có thể có suy nghĩ tiêu cực về bản thân."],
                  "advice": "Sự an toàn của bạn là ưu tiên hàng đầu. Hãy liên hệ NGAY với chuyên gia y tế hoặc bác sĩ tâm lý." }
            ],
            "citations": "Dựa trên tiêu chuẩn đánh giá của APA (American Psychiatric Association) qua bảng hỏi PHQ-9 (Kroenke et al., 2001)."
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
                { "min": 0, "max": 4, "label": "Bình thường", "color": "bg-emerald-500", 
                  "summary": "Bạn kiểm soát tốt cảm xúc và không có biểu hiện lo âu.",
                  "strengths": ["Sự điềm tĩnh trước áp lực.", "Hệ thần kinh thư giãn."],
                  "weaknesses": ["Không phát hiện rủi ro."],
                  "advice": "Duy trì tập thể dục và thói quen tích cực." },
                { "min": 5, "max": 9, "label": "Lo âu nhẹ", "color": "bg-yellow-400",
                  "summary": "Bạn thỉnh thoảng cảm thấy căng thẳng và lo lắng.",
                  "strengths": ["Nhạy bén với môi trường."],
                  "weaknesses": ["Đôi khi suy nghĩ quá mức (overthinking)."],
                  "advice": "Thử áp dụng các bài tập hít thở sâu và chánh niệm." },
                { "min": 10, "max": 14, "label": "Lo âu vừa", "color": "bg-orange-500",
                  "summary": "Mức độ lo âu của bạn đang cản trở sự tập trung.",
                  "strengths": ["Thận trọng trong các quyết định."],
                  "weaknesses": ["Khó thư giãn.", "Dễ bực dọc."],
                  "advice": "Nên tham khảo ý kiến chuyên gia tâm lý." },
                { "min": 15, "max": 21, "label": "Lo âu nặng", "color": "bg-red-500",
                  "summary": "Mức độ căng thẳng thần kinh rất cao.",
                  "strengths": ["Việc bạn nhận diện được vấn đề là bước đầu tiên để chữa lành."],
                  "weaknesses": ["Kiệt sức vì lo lắng.", "Ảnh hưởng thể chất (tim đập nhanh, bồn chồn)."],
                  "advice": "Cần sự can thiệp y tế hoặc trị liệu CBT ngay." }
            ],
            "citations": "Dựa trên tiêu chuẩn của Spitzer, Kroenke, Williams, & Löwe (2006) - Công cụ GAD-7."
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
            { "label": "Rất không đồng ý", "score": 1 },
            { "label": "Không đồng ý", "score": 2 },
            { "label": "Bình thường", "score": 3 },
            { "label": "Đồng ý", "score": 4 },
            { "label": "Rất đồng ý", "score": 5 }
        ],
        "scoring_type": "bigfive",
        "scoring": {
            "traits": {
                "O": { "name": "Sẵn sàng trải nghiệm (Openness)", "high": "Bạn sáng tạo, thích khám phá.", "low": "Bạn thực tế, thích sự ổn định." },
                "C": { "name": "Sự tận tâm (Conscientiousness)", "high": "Bạn kỷ luật và có tổ chức.", "low": "Bạn linh hoạt, đôi khi ngẫu hứng." },
                "E": { "name": "Hướng ngoại (Extraversion)", "high": "Bạn hòa đồng, nhiệt huyết.", "low": "Bạn độc lập, điềm tĩnh (Hướng nội)." },
                "A": { "name": "Sự dễ chịu (Agreeableness)", "high": "Bạn thân thiện, giàu lòng vị tha.", "low": "Bạn cạnh tranh, lý trí." },
                "N": { "name": "Tâm lý bất ổn (Neuroticism)", "high": "Bạn nhạy cảm, dễ lo âu.", "low": "Bạn điềm tĩnh, tự tin." }
            },
            "citations": "Dựa trên mô hình tính cách BFI-10 của Rammstedt & John (2007) và Costa & McCrae."
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
                { "min": 0, "max": 13, "label": "Stress thấp", "color": "bg-emerald-500",
                  "summary": "Bạn quản lý căng thẳng rất tốt.",
                  "strengths": ["Sự linh hoạt về mặt tâm lý.", "Kỹ năng giải quyết vấn đề tốt."],
                  "weaknesses": ["Có thể đôi khi quá chủ quan."],
                  "advice": "Hãy duy trì sự cân bằng hiện tại." },
                { "min": 14, "max": 26, "label": "Stress trung bình", "color": "bg-orange-400",
                  "summary": "Áp lực đang dần tích tụ trong bạn.",
                  "strengths": ["Vẫn đang cố gắng kiểm soát cuộc sống."],
                  "weaknesses": ["Dễ bị quá tải nếu có thêm sự cố."],
                  "advice": "Sắp xếp lại khối lượng công việc, nghỉ ngơi." },
                { "min": 27, "max": 40, "label": "Stress cao", "color": "bg-red-500",
                  "summary": "Báo động: Bạn đang chịu đựng căng thẳng quá ngưỡng.",
                  "strengths": ["Nhận diện được giới hạn của mình."],
                  "weaknesses": ["Nguy cơ suy kiệt thể chất và tinh thần (Burnout)."],
                  "advice": "Cần ngay lập tức dừng các công việc không cần thiết và tìm sự giúp đỡ." }
            ],
            "citations": "Dựa trên tiêu chuẩn Thang đo Căng thẳng Cảm nhận (PSS) của Cohen, Kamarck, & Mermelstein (1983)."
        }
    },
    "psqi": {
        "id": "psqi",
        "title": "Chất lượng Giấc ngủ (Sàng lọc)",
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
                { "min": 0, "max": 4, "label": "Ngủ tốt", "color": "bg-emerald-500",
                  "summary": "Bạn có một giấc ngủ chất lượng và phục hồi tốt.",
                  "strengths": ["Phục hồi thể chất và não bộ tốt."],
                  "weaknesses": ["Không có."],
                  "advice": "Duy trì nhịp sinh học hiện tại." },
                { "min": 5, "max": 9, "label": "Rối loạn nhẹ", "color": "bg-yellow-500",
                  "summary": "Chất lượng giấc ngủ của bạn đang bị ảnh hưởng một phần.",
                  "strengths": ["Vẫn duy trì được giấc ngủ cốt lõi."],
                  "weaknesses": ["Khó đi vào giấc ngủ.", "Buồn ngủ ban ngày."],
                  "advice": "Hạn chế caffeine và màn hình điện thoại trước khi ngủ." },
                { "min": 10, "max": 15, "label": "Mất ngủ rõ rệt", "color": "bg-red-500",
                  "summary": "Giấc ngủ của bạn rất kém, ảnh hưởng sức khỏe trầm trọng.",
                  "strengths": ["Bạn nhận biết được các triệu chứng mất ngủ."],
                  "weaknesses": ["Suy giảm trí nhớ, mệt mỏi mạn tính."],
                  "advice": "Hãy thăm khám bác sĩ thần kinh hoặc chuyên gia giấc ngủ." }
            ],
            "citations": "Chỉ số dựa trên khung Đánh giá chất lượng giấc ngủ Pittsburgh (PSQI) rút gọn."
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
                  "summary": "Bạn có khả năng tập trung và tổ chức tốt.",
                  "strengths": ["Khả năng hoàn thành công việc theo kế hoạch."],
                  "weaknesses": ["Không có dấu hiệu ADHD."],
                  "advice": "Duy trì kỹ năng quản lý thời gian của bạn." },
                { "min": 12, "max": 16, "label": "Có dấu hiệu chú ý kém", "color": "bg-orange-400",
                  "summary": "Bạn có một số khó khăn trong việc duy trì sự tập trung.",
                  "strengths": ["Có thể tư duy nhanh nhạy, làm nhiều việc cùng lúc."],
                  "weaknesses": ["Trì hoãn, dễ xao nhãng."],
                  "advice": "Nên sử dụng sổ tay, app nhắc việc và chia nhỏ công việc." },
                { "min": 17, "max": 24, "label": "Rủi ro ADHD cao", "color": "bg-red-500",
                  "summary": "Dấu hiệu rõ ràng của Hội chứng Tăng động giảm chú ý.",
                  "strengths": ["Khả năng sáng tạo đột phá, năng lượng cao (khi có hứng thú)."],
                  "weaknesses": ["Kém tổ chức, hay bỏ dở giữa chừng, bồn chồn."],
                  "advice": "Cần gặp bác sĩ tâm thần để chẩn đoán xác định và hỗ trợ (dùng thuốc hoặc CBT)." }
            ],
            "citations": "Dựa trên tiêu chuẩn Thang báo cáo ADHD ở người lớn (ASRS) v1.1 của Tổ chức Y tế Thế giới (WHO)."
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
                { "min": 6, "max": 14, "label": "EQ Cần cải thiện", "color": "bg-red-400",
                  "summary": "Bạn gặp khó khăn trong việc quản lý và thấu hiểu cảm xúc.",
                  "strengths": ["Bạn tư duy theo hướng logic và thực tế."],
                  "weaknesses": ["Dễ bốc đồng, giao tiếp chưa khéo léo."],
                  "advice": "Nên rèn luyện sự lắng nghe, và thử hít thở sâu trước khi phản ứng." },
                { "min": 15, "max": 24, "label": "EQ Trung bình", "color": "bg-yellow-500",
                  "summary": "Bạn có khả năng cảm thụ cảm xúc khá tốt.",
                  "strengths": ["Thích ứng được với các tình huống xã hội."],
                  "weaknesses": ["Đôi khi vẫn bị cảm xúc chi phối."],
                  "advice": "Tập quan sát ngôn ngữ cơ thể của người khác nhiều hơn." },
                { "min": 25, "max": 30, "label": "EQ Cao", "color": "bg-emerald-500",
                  "summary": "Bạn làm chủ cảm xúc xuất sắc.",
                  "strengths": ["Đồng cảm cao, kỹ năng lãnh đạo và kết nối con người tốt."],
                  "weaknesses": ["Có thể đôi khi quá nhạy cảm với nỗi đau của người khác."],
                  "advice": "Phát huy sức mạnh này để xây dựng mạng lưới quan hệ sâu sắc." }
            ],
            "citations": "Dựa trên mô hình Trí tuệ Cảm xúc (Trait Emotional Intelligence)."
        }
    },
    "mbi": {
        "id": "mbi",
        "title": "Hội chứng Burnout",
        "description": "Đánh giá mức độ kiệt sức nghề nghiệp.",
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
            { "label": "Vài lần/năm", "score": 1 },
            { "label": "Vài lần/tháng", "score": 2 },
            { "label": "Vài lần/tuần", "score": 3 },
            { "label": "Mỗi ngày", "score": 4 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 8, "label": "Nhiệt huyết", "color": "bg-emerald-500",
                  "summary": "Bạn vẫn đang duy trì năng lượng làm việc tốt.",
                  "strengths": ["Động lực làm việc ổn định, tích cực."],
                  "weaknesses": ["Không có dấu hiệu kiệt sức."],
                  "advice": "Duy trì work-life balance." },
                { "min": 9, "max": 16, "label": "Nguy cơ Burnout", "color": "bg-orange-500",
                  "summary": "Báo động đỏ: Bạn đang mệt mỏi và bắt đầu vô cảm.",
                  "strengths": ["Vẫn cố gắng hoàn thành trách nhiệm."],
                  "weaknesses": ["Chán nản, giảm hiệu suất, mệt mỏi."],
                  "advice": "Cần xin nghỉ phép (leave of absence) ngắn ngày để phục hồi." },
                { "min": 17, "max": 24, "label": "Kiệt sức hoàn toàn (Burnout)", "color": "bg-red-600",
                  "summary": "Bạn đã bị Burnout nặng nề.",
                  "strengths": ["(Hệ thống báo lỗi tinh thần của bạn đang hoạt động đúng cách để bảo vệ bạn khỏi sự sụp đổ)"],
                  "weaknesses": ["Cạn kiệt cảm xúc, ghét công việc, hoài nghi bản thân."],
                  "advice": "Tái cấu trúc lại công việc. Tham vấn tâm lý hoặc cân nhắc thay đổi môi trường làm việc." }
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
                { "min": 6, "max": 14, "label": "Tự trọng thấp", "color": "bg-red-400",
                  "summary": "Bạn có xu hướng đánh giá thấp giá trị của bản thân.",
                  "strengths": ["Sự khiêm tốn."],
                  "weaknesses": ["Thiếu tự tin, hay tự chỉ trích, dễ bị tổn thương bởi nhận xét."],
                  "advice": "Hãy thực hành 'Self-compassion' (yêu thương bản thân), ghi nhận những thành tựu nhỏ." },
                { "min": 15, "max": 20, "label": "Tự trọng trung bình", "color": "bg-yellow-500",
                  "summary": "Bạn có sự tự tôn ở mức ổn định.",
                  "strengths": ["Nhìn nhận bản thân khá thực tế."],
                  "weaknesses": ["Đôi khi vẫn so sánh mình với người khác."],
                  "advice": "Tiếp tục phát triển các kỹ năng để tăng cường sự tự tin." },
                { "min": 21, "max": 24, "label": "Tự trọng cao", "color": "bg-emerald-500",
                  "summary": "Bạn trân trọng và biết rõ giá trị của mình.",
                  "strengths": ["Tự tin, kiên định, không dễ bị ảnh hưởng bởi dư luận."],
                  "weaknesses": ["Có thể trở nên kiêu ngạo nếu không kiểm soát (cái tôi lớn)."],
                  "advice": "Phát huy sự tự tin này để tạo ảnh hưởng tích cực." }
            ],
            "citations": "Dựa trên tiêu chuẩn Rosenberg Self-Esteem Scale (1965)."
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
            { "label": "Nặng", "score": 3 },
            { "label": "Cực kỳ nặng", "score": 4 }
        ],
        "scoring": {
            "ranges": [
                { "min": 0, "max": 7, "label": "Không đáng kể", "color": "bg-emerald-500",
                  "summary": "Bạn có thể có một chút cẩn thận nhưng không phải OCD.",
                  "strengths": ["Tính cẩn thận."],
                  "weaknesses": ["Không có dấu hiệu bệnh lý."],
                  "advice": "Mọi người đều có những lúc kiểm tra lại đồ đạc, điều này là bình thường." },
                { "min": 8, "max": 13, "label": "OCD Nhẹ", "color": "bg-yellow-500",
                  "summary": "Có sự xuất hiện của các triệu chứng OCD nhẹ.",
                  "strengths": ["Bạn vẫn đang kiểm soát được cuộc sống."],
                  "weaknesses": ["Mất thời gian vào các nghi thức nhỏ."],
                  "advice": "Tập đối mặt với sự không hoàn hảo và thử không thực hiện hành vi cưỡng chế." },
                { "min": 14, "max": 20, "label": "OCD Đáng kể", "color": "bg-red-500",
                  "summary": "Suy nghĩ ám ảnh đang gây cản trở lớn đến cuộc sống.",
                  "strengths": ["Sự nhận thức về vấn đề của bản thân."],
                  "weaknesses": ["Mệt mỏi não bộ, mất nhiều thời gian, lo âu tột độ."],
                  "advice": "Liệu pháp Nhận thức Hành vi (CBT), đặc biệt là ERP (Tiếp xúc & Ngăn ngừa Phản ứng) cùng chuyên gia là rất cần thiết." }
            ],
            "citations": "Dựa trên bảng hỏi Yale-Brown Obsessive Compulsive Scale (Y-BOCS)."
        }
    }
};
