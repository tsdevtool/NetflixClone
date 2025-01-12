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

# Token và cookie

Cả Token và Cookie đều được sử dụng trong việc quản lý phiên làm việc (session management) và xác thực người dùng. Tuy nhiên, chúng có sự khác biệt lớn về cách hoạt động, bảo mật, và ứng dụng thực tế.

## 1. Token

**Token** là một chuỗi ký tự đại diện cho quyền truy cập. Một dạng phổ biến của token là JWT (JSON Web Token).

### a, Đặc điểm

**Stateless**: Không lưu trạng thái trên server. Thông tin người dùng được mã hoá trực tiếp trong token (như JWT).
**Lưu trữ**: Thường được lưu trữ trong localStorage hoặc sessionStorage của trình duyệt. Cũng có thể lưu trong cookie nếu cần.
**Cách sử dụng**:

- Gửi token qua HTTP Header (Authorization: Bearer <token>)
- Thích hợp cho API RESTful, đặc biệt là các hệ thống không lưu trữ session trên server

### b, Ưu điểm

**Khả năng sử dụng đa nền tảng**: Token có thể sử dụng trên các dịch vụ khác nhau mà không cần cấu hình thêm (trong các hệ thống microservices).
**Tính linh hoạt**: có thể lưu trong nhiều nơi (localStoragem cookie hoặc thậm chí là biến trong bộ nhớ).
**Bảo mật kết hợp HTTPS**: Nếu Token được truyền qua HTTPS, dữ liệu sẽ an toàn trước các cuộc tấn công nghe trộm.

### c, Hạn chế

**Khó thu hồi**: Một token đã phát hành vẫn hợp lệ đến khi hết hạn (nếu không có cơ chế blaclist)
**Rủi ro khi lưu trữ trong localStorage**: Dễ bị tấn công XSS (Cross-Site Scripting nếu ứng dụng không bảo mật tốt)

## 2. Cookie

Cookie là một tệp nhỏ được trình duyệt lưu trữ, chủ yếu để thông tin liên quan đến phiên làm việc hoặc cách cài đặt của người dùng.

### a, Đặc điểm

**Stateful**: Thường đợc sử dụng để lưu trữ ID phiên (sessionID) để server quản lý trạng thái.
**Lưu trữ**: Được lưu tự động trong trình duyệt và gửi đi kèm mỗi lần client gửi yêu cầu đến server(nếu được gắn cờ HtthpOnly hoặc Secure).
**Cách sử dụng**: Cookie thường được dùng trong các ứng dụng web truyền thống (ví dụ: khi người dùng đăng nhập server tạo sessionID và lưu trong cookie).

### b, Ưu điểm:

**Tự động gửi kèm**: Trình duyệt tự động gửi cookie khi gửi request, không cần thao tác thủ công.
**Quản lý tập trung**: Servrer có quyền toàn quản lý session, bao gồm việc huỷ session
**Bảo mật với HttpOnly và Secure flags**:

- HttpOnly: Ngăn JS truy cập cookie, giảm rủi ro XSS
- Secure: Chỉ gửi cookie khi kết nối HTTPS

### c, Hạn chế

**Khả năng mở rộng kém**: Khi sử dụng mở rộngt hành microservices, việc truyền session giữa các dịch vụ có thể trở nên phức tạp.
**Rủi ro CSRF (Cross-Site Request Forgery)**: Vì cookie được gửi tự động trong mỗi yêu cầu, kẻ tấn công có thể lợi dụng để gửi yêu cầu độc hại thay mặt người dùng.
**Hạn chế lưu trữ**: Dung lượng cookie bị giới hạn (khoảng 4KB)

## 3. So sánh Token và Cookie

| **Đặc điểm**           | **Token**                                     | **Cookie**                               |
| ---------------------- | --------------------------------------------- | ---------------------------------------- |
| **Lưu trữ**            | `localStorage`, `sessionStorage`, hoặc cookie | Trình duyệt lưu tự động                  |
| **Gửi kèm request**    | Gửi qua HTTP Header (`Authorization`)         | Gửi tự động qua request nếu thuộc domain |
| **Stateless/Stateful** | Stateless                                     | Stateful                                 |
| **Bảo mật**            | Dễ bị XSS nếu lưu trong `localStorage`        | Dễ bị CSRF nếu không bảo vệ tốt          |
| **Quản lý**            | Client quản lý token                          | Server quản lý session                   |
| **Khả năng mở rộng**   | Phù hợp với các API RESTful và microservices  | Tốt cho ứng dụng đơn lẻ                  |
| **Dung lượng lưu trữ** | Tùy thuộc vào loại token, thường lớn hơn      | Giới hạn ~4KB                            |

## 4. Sử dụng Token hay Cookie

- Nên sử dụng Token khi:
  - Bạn đang xây dựng API RESTful.
  - Ứng dụng kiến trúc microservices.
  - Muốn giảm tải lưu trữ trạng thái trên server
- Nên sử dụng Cookie khi:
  - Ứng dụng web đơn giản, không cần mở rộng lớn
  - Bạn cần lợi thế trong việc tự động gửi cookie qua request.

## 5. Kết hợp Token và Cookie

Lưu JWT trong cookie với cờ HttpOnly và Secure. Phương pháp này:

- Tránh được XSS vì JS không thể truy cập cookie.
- Giảm nguy cơ CSRF bằng cách sử dụng các biến pháp phòng ngừa
