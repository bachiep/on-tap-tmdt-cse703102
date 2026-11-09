# Góc Ôn Tập Thương Mại Điện Tử · CSE703102

Hệ thống ôn thi tương tác toàn diện môn **Thương mại điện tử (CSE703102)** - Phenikaa University.
Được trích xuất và số hóa toàn bộ từ đề cương chính thức 121 trang.

---

## 🌟 Tính năng nổi bật

1. **Ngân hàng câu hỏi trọn vẹn**:
   - **300 câu trắc nghiệm** (chia đều 15 buổi học, mỗi đáp án giải thích chi tiết, đối chiếu ảnh chụp đáp án gốc).
   - **60 câu tự luận** (câu hỏi chuyên sâu, bài toán thực tiễn và đáp án mẫu chi tiết).
2. **Chế độ Luyện phản xạ nhanh (Random 30 câu)**:
   - Tự động bốc ngẫu nhiên **30 câu trắc nghiệm** từ ngân hàng 300 câu hỏi.
   - **Giữ nguyên 100% thứ tự đáp án gốc A - B - C - D** (không xáo trộn đáp án nhằm rèn phản xạ chính xác).
   - Nút **`🎲 Đổi đề 30 câu mới`** cho phép tạo đề thi thử mới tức thì bất cứ lúc nào.
3. **Kho ảnh trích đoạn & Đề cương PDF gốc (100% Offline)**:
   - **360 ảnh trích đoạn đáp án gốc**: `answers/q_1.png` - `q_300.png` và `answers/e_1.png` - `e_60.png`.
   - **121 trang ảnh scan đề cương**: `pages/page_1.png` - `page_121.png` độ nét cao.
   - Tài liệu gốc: `de-cuong-goc.pdf` (121 trang).
4. **Sổ tay công thức & Mô phỏng TMĐT 3D**:
   - Thẻ Flashcard 3D lật mở (phong cách Wayground / Quizizz).
   - Bộ máy tính tính toán trực quan các chỉ số kinh doanh TMĐT: CPC, CPM, CPA, CTR, CR, ROAS, ROI, LTV, AOV, v.v.
   - Nút điều hướng thông minh cho phép chuyển đổi mượt mà giữa Sổ tay công thức và làm bài tập.
5. **Đồng bộ tiến độ đa thiết bị (Cross-device Sync)**:
   - **QR Code siêu nét**: Quét mã từ máy tính sang điện thoại lập tức.
   - **Mã rút gọn 6 ký tự / Link ngắn**: Chia sẻ qua Zalo, Messenger (được hỗ trợ bởi `server.py` và `api/sync.js`).
   - **Sao lưu & Phục hồi JSON**: Tải file tiến độ về máy hoặc nạp lại bất cứ lúc nào.
6. **Trải nghiệm học tập nâng cao**:
   - Phím tắt nhanh: `A, B, C, D` (hoặc `1, 2, 3, 4`) chọn đáp án; `←, →` chuyển câu.
   - Đếm chuỗi đúng liên tiếp (Streak 🔥) kèm hiệu ứng pháo hoa Confetti và âm thanh tương tác.
   - Chế độ Giao diện Sáng / Tối (Light / Dark mode).

---

## 📁 Cấu trúc dự án

```text
├── index.html                 # Giao diện chính ứng dụng
├── style.css                  # Toàn bộ thiết kế CSS responsive & theme system
├── app.js                     # Logic xử lý giao diện, Random 30, QR & Sync engine
├── data.js                    # Bộ dữ liệu 300 câu trắc nghiệm + 60 câu tự luận (15 buổi)
├── formulas.js                # Dữ liệu công thức TMĐT, giải thích và máy tính mô phỏng
├── server.py                  # Máy chủ nội bộ hỗ trợ đầy đủ API /api/sync & Static files
├── phenikaa-icon.png          # Logo Phenikaa University
├── favicon.ico                # Favicon ứng dụng đa kích cỡ
├── de-cuong-goc.pdf           # Tài liệu đề cương 121 trang gốc
├── qrcode.min.js              # Thư viện sinh mã QR
├── jsqr.min.js                # Thư viện quét / đọc QR từ ảnh
├── MO_WEB.bat                 # Tiện ích 1-Click mở web ngay lập tức
├── package.json               # Cấu hình dự án Node.js
├── vercel.json                # Cấu hình triển khai Vercel
├── answers/                   # 360 ảnh trích đoạn đáp án gốc (q_1..q_300, e_1..e_60)
├── pages/                     # 121 trang ảnh scan tài liệu đề cương (page_1..page_121)
├── api/
│   └── sync.js                # Serverless function Vercel xử lý link rút gọn
└── _vercel/                   # Stub scripts tương thích môi trường offline / local
```

---

## 🌐 Đường dẫn trực tuyến (Live Demo)

- **GitHub Pages (Chính thức)**: [https://bachiep.github.io/on-tap-tmdt-cse703102/](https://bachiep.github.io/on-tap-tmdt-cse703102/)
- **Kho mã nguồn GitHub**: [https://github.com/bachiep/on-tap-tmdt-cse703102](https://github.com/bachiep/on-tap-tmdt-cse703102)

---

## 🚀 Hướng dẫn chạy thử nghiệm tại máy (Local)

- Bấm đúp vào file [`MO_WEB.bat`](file:///e:/Dowloads/TMDT/MO_WEB.bat) trong thư mục này.
- Hoặc mở Shortcut **`On Tap TMDT CSE703102`** ngoài màn hình Desktop.
- Hoặc chạy lệnh: `python server.py 8000`
- Truy cập trình duyệt: `http://localhost:8000`
