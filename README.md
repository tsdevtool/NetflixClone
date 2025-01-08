# NetflixClone

# Express

Express là thư viện (framework) phổ biến được sử dụng để xây dựng các ứng dụng web và API trong Node.js. Nó đơn giản, nhanh chóng và dễ sử dụng giúp giảm bớt việc viết mã phức tạp khi xây dựng ứng dụng web.

## Các đặc điểm chính của Express

### 1. Routing

Express cung cấp một hệ thống routing mạnh mẽ để quản lý các tuyến đường HTTP. Bạn có thể định nghĩa các tuyến đường cho phương thức HTTP khác nhau như GET, POST, PUT, DELETE, ...

**GET:**

Lấy dữ liệu từ server mà không thay đổi tài nguyên trên server, dữ liệu thường được truyền qua URL dưới dạng query string và không body yêu cầu.

**POST:**

Gửi dữ liệu lên server, thường là khi tạo mới tài nguyên, thay đổi trạng thái hoặc thực hiện một hành động nào đó trên server, dữ liệu được gửi trong body không qua URL. Thường được dùng cho đăng ký tài khoản, gửi biểu mẫu, thêm bài viết mới

**PUT:**

Cập nhật tài nguyên trên server, thường thay thế toàn bộ tài nguyên bằng dữ liệu mới. Dữ liệu mới sẽ thay thế dữ liệu cũ và được gửi trong body. Thường được dùng khi chỉnh sửa thông tin tài khoản người dùng, cập nhật sản phẩm

**DELETE**

Xoá tài nguyên trên server và không có body

| Phương thức | Mục đích                    | Dữ liệu trong yêu cầu     | Ví dụ sử dụng               |
| ----------- | --------------------------- | ------------------------- | --------------------------- |
| **GET**     | Lấy dữ liệu                 | Không có (chỉ trong URL)  | Lấy danh sách sản phẩm      |
| **POST**    | Gửi dữ liệu (tạo mới)       | Trong thân yêu cầu (body) | Gửi form đăng ký người dùng |
| **PUT**     | Cập nhật toàn bộ tài nguyên | Trong thân yêu cầu (body) | Cập nhật thông tin sản phẩm |
| **DELETE**  | Xóa tài nguyên              | Không có (chỉ trong URL)  | Xóa tài khoản người dùng    |

### 2. Middleware

Express cho phép dử dụng các middleware(phần mềm trung gian) để xử lý yêu cầu HTTP trước khi chúng được gửi đến các tuyến đường. Middleware có thể xử lý xác thực, ghi log, phân tích dữ liệu POST, và nhiều tác vụ khác

### 3. Template Engine

Express hỗ trợ nhiều công cụ tạo mẫu (template engines) như EJS, Pug và Handlebars để xây dựng giao diện người dùng.

### 4. Xử lý lỗi

Express cung cấp cơ chế xử lý lỗi dễ dàng để quản lý các lỗi trong ứng dụng của bạn

### 5. Tích hợp với cơ sở dữ liệu

Express có thể dễ dàng tích với với các cơ sở dữ liệu như MongoDB, MySQL, PostgreSQL, ...

## Cài đặt

### 1.Tạo dự án Node.js

mkdir my-app
cd my-app
npm init -y

### 2.Cài đặt Express

npm i express

### 3.Tạo file server

const express = require('express');
const app = express();

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
res.send('Hello, Express!');
});

// Lắng nghe trên cổng 3000
app.listen(3000, () => {
console.log('Server is running on port 3000');
});

## Tham khảo: GPT 4.0 mini

# mongoose

## MongoDB là gì?

    MongoDB là một cơ sở dữ liệu NoSQL mã nguồn mở, sử dụng mô hình dữ liệu dựa trên document. Thay vì lưu trữ dữ liệu dưới dạng bảng (row và column) như SQL, MongoDB lưu trữ dưới dạng JSON-like documents (BSON-Binary JSON).

### Tính năng chính

**Document-Oriented** : Dữ liệu được lưu dưới dạng JSON-like
**Schema-Less**: Không cần định nghĩa schema trước, giúp linh hoạt hơn khi lưu dữ liệu.
**Horizontal Scaling**: Hỗ trợ sharding, giúp phân tích dữ liệu trên nhiều server.
**High Performance**: Tối ưu hoá để xử lý các tác vụ nhanh chóng
**Query ngôn ngữ mạnh mẽ**: Hỗ trợ tìm kiếm, lọc, sắp xếp và nhiều thao tác khác.

### Ưu điểm:

- Phù hợp với dữ liệu phi cấu trúc và thay đổi thường xuyên
- Hỗ trợ tích hợp với các công cụ và ngôn ngữ hiện đại như Node.js
- Dễ học và sử dụng

### Hạn chế

- Không phù hợp với các hệ thống yêu cầu tính toàn vẹn dữ liệu chặt chẽ như ngân hàng

## Mongoose là gì?

Mongoose là thư viện ODM(Object Data Modeling) cho MongoDB và Node.js. Nó cung cấp cách làm việc với MongoDB bằng cách sử dụng các đối tượng trong JS(models) đồng thời hỗ trợ định nghĩa Schema và xác thực dữ liệu

### Lợi ích:

**Schema-based modeling**: Xác định cấu trúc và dữ liệu ngay từ đầu.
**Validation**: Hỗ trợ xác thực dữ liệu
**Middleware**: Cung cấp các hooks để xử lý trước/sau các hành động như save, delete, find
**Query helpers**: Dễ dàng viết các query phức tạp
**Relationship management**: Quản lý mối quan hệ giữa các document.

### Cách cài đặt

npm i mongoose

**Kiểm tra các file trong thư mục models**

# jwt (JSON Web Token)

JWT là một tiêu chuẩn mã hoá dựa trên JSON, được sử dụng để truyền tải dữ liệu giữa các bên (client và server) một cách an toàn. JWT thường được sử dụng trong xác thực (authentication) và uỷ quyền (authoriaztion) trong các ứng dụng web.

## Cấu trúc

JWT có 3 phần chính được nối với nhau bằng dấu " . "
Header.Payload.Signture

- Header: chứa thông tin metadata về token bao gồm
  **alg**: Thuật toán mã hoá được sử dụng như HS256 RS256
  **typ**: Loại token thường là JWT
  {
  "alg": "HS256",
  "typ": "JWT"
  }
- Payload: chứa dữ liệu chính của token (claims), bao gồm:
  **Registered claims**: Một số tiêu chuẩn như: + iss: Issuer (Người phát hành) + exp: Expiration time (Thời gian hết hạn) + iat: Issued at (Thời gian phát hành) + sub: Subject (Mục tiêu) + aud: Audience (Đối tượng) mà token hướng tới
  **Custom claims**: Dữ liệu tuỳ chỉnh như userId, roles,...
  {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "exp": 1716172800
  }
- Signature: được tạo bằng cách mã hoá header và payload đảm bảo tính toàn vẹn của token. Công thức tạo chữ ký:
  Signature = HMACSHA256(
  base64UrlEncode(Header) + "." + base64UrlEncode(Payload),
  secret
  )
  **Lưu ý**: Nếu token bị sửa dổi, chữ ký sẽ không khớp và token không hợp lệ

## Cách hoạt động

1. Client gửi yêu cầu đăng nhập

- Người dùng nhập thông tin đăng nhập
- Server xác thực thông tin đăng nhập và tạo một JWT

2. Server trả JWT về Client

- JWT chứa thông tin người dùng và thời gian hết hạn
- Token sẽ được lưu trữ ở phía Client (thường là trong localStorage hoặc Cookie)

3. Client sử dụng JWT để truy cập tài nguyên

- Mỗi yêu cầu đến server đều gửi kèm JWT trong HTTP header (Authorization: Bearer<token>)
- Server xác minh token và cấp quyền truy cập nếu token hợp lệ

## Ưu điểm

- Tính di động: JWT là một chữ ký độc lập và không yêu cầu trạng thái trên server
- Bảo mật: Tính toàn vẹn: Pay load không thể bị sửa đổi mà không mất hiệu lực chữ ký. Có thể hết hợp HTTPS để mã hoá dữ liệu truyền tải.
- Hiệu suất cao: Không thể truy vấn dữ liệu mỗi khi xác thực token (nếu không cần blacklist)

## Hạn chế

- Không thể thu hồi: Nếu không sử dụng cơ chết blacklist, một token đã phát hành vẫn có hiệu lực đến khi hết hạn, ngay cả khi người dùng đã đăng xuất.
- Kích thước lớn: Vì chứa payload, kích thước JWT lướn hơn so với token chỉ có ID
- Xử lý hết hạn: Cần phải lập trình thêm cơ chế mới token (refresh token)

## Cài đặt

npm install jsonwebtoken

## Khi nào nên sử dụng JWT

JWT rất phù hợp trong các tình huống sau:

- Xác thực không trạng thái
- Ứng dụng phân tán
- Hệ thống yêu cầu hiệu suất cao và không muốn lưu trữ thông tin đăng nhập trên server
