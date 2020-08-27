import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Table,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import Footer from "../../admin/components/Footer/Footer";
import AboutUsHeader from "../../components/Headers/AboutUsHeader";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

const AboutUs = () => {
  //   const [specialitySelect, setSpecialitySelect] = React.useState(null);
  //   const [firstFocus, setFirstFocus] = React.useState(false);
  //   const [emailFocus, setEmailFocus] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [topFixed, setTopFixed] = React.useState("0");

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 109 ||
        document.body.scrollTop > 109
      ) {
        setNavbarColor("bg-brand");
        setTopFixed("0px");
      } else if (
        document.documentElement.scrollTop < 110 ||
        document.body.scrollTop < 110
      ) {
        setNavbarColor("navbar-transparent");
        setTopFixed("0");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <IndexNavbar navbarColor={navbarColor} topFixed={topFixed} />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-left">
            <div className="">
              <Container>
                <Row>
                  <Col className="" md="8">
                    <h2 className="title">
                      1. WHAT - Lịch sử TOEIC – nó là gì?
                    </h2>
                  </Col>
                </Row>
                <p>
                  Kỳ thi TOEIC{" "}
                  <span className="text-primary">
                    (Test of English for International Communication – Bài kiểm
                    tra tiếng Anh giao tiếp quốc tế)
                  </span>{" "}
                  do Viện Khảo thí giáo dục Hoa Kỳ (Educational Testing Service
                  - ETS) Hoa Kỳ có trụ sở đặt tại Lawrenceville, bang New
                  Jersey, Hoa Kỳ phiển dựa trên bài thi TOEFL theo một đề nghị
                  từ Liên đoàn Doanh thương Nhật Bản (Keidanren) kết hợp với Bộ
                  Công thương Quốc tế Nhật Bản (MITI) (nay là Bộ Kinh tế, Thương
                  mại và Công nghiệp Nhật Bản (METI). Báo Asahi Shimbun đã phỏng
                  vấn Yasuo Kitaoka, nhân vật trung tâm của đội ngũ có ý tưởng
                  về chương trình trắc nghiệm TOEIC này. Do đó chương trình trắc
                  nghiệm TOEIC có thể được xem là một chương trình lai Mỹ -
                  Nhật.
                </p>
                <div className="text-center">
                  <img src={require("../../assets/img/a1.png")} alt="" />
                  <br />
                  <i className="font-weight-bold text-primary">
                    Ông Yasuo Kitaoka
                  </i>
                </div>
                <p className="mt-2">
                  Kì thi này được lập ra nhằm đánh giá trình độ thông thạo tiếng
                  Anh của các đối tượng sử dụng ngôn ngữ này như một ngoại ngữ.
                  Trước đây, chỉ có các công ty tập đoàn mới cần đến kì thi
                  TOEIC, nhưng kì thi này hiện đã được phổ biến đối với các sinh
                  viên vừa tốt nghiệp đại học vì điểm số TOEIC đóng vai trò quan
                  trọng trong việc họ có được tuyển dụng hay không. Cần chú ý là
                  chứng chỉ TOEIC chỉ có hiệu lực trong vòng 2 năm.
                </p>
                <div
                  className="text-center  ml-auto mr-auto"
                  style={{ width: "70%" }}
                >
                  <div className="d-flex justify-content-between flex-wrap">
                    <img src={require("../../assets/img/a2.png")} alt="" />
                    <img src={require("../../assets/img/a3.png")} alt="" />
                    <img
                      className="w-100 mt-4"
                      src={require("../../assets/img/a4.png")}
                      alt=""
                    />
                  </div>
                  <i className="font-weight-bold text-primary">
                    Trụ sở chính của ETS đặt tại Lawrenceville, bang New Jersey,
                    Hoa Kỳ (Headquarters of the Educational Testing Service,
                    ETS, Lawrenceville, New Jersey)
                  </i>
                </div>
                <div className="ml-5">
                  <section>
                    <h4>
                      {" "}
                      1.1. Bố cục một bài thi TOEIC 2 kỹ năng Listening and
                      Reading (TOEIC Nghe và Đọc.)
                    </h4>
                    <div className="table-full-width table-responsive">
                      <div className="p-4 text-center w-100 text-white bg-brand font-12 font-weight-bold">
                        <span>LISTENING – THI NGHE</span>
                        <br /> <span>100 câu hỏi – 45 phút</span>
                      </div>
                      <Table bordered className="text-center">
                        <thead>
                          <th>Mục thi</th>
                          <th>Phiên bản cũ</th>
                          <th>Phiên bản mới nhất từ 1/6/2019</th>
                          <th>Ghi chú cho phiên bản 1/6/2019</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-weight-semi">
                              Part 1: Câu hỏi hình ảnh
                            </td>
                            <td className="text-center">10 câu</td>
                            <td className="text-center">6 câu</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>
                                  Kiểm tra khả năng hiểu hình ảnh (hoạt động, sự
                                  kiện, con người trong ảnh)
                                </li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C.</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Part 2: Hỏi và trả lời
                            </td>
                            <td className="text-center">30 câu</td>
                            <td className="text-center">25 câu</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>
                                  Xuất hện các từ tắt như want to-wanna, got
                                  to-gotta
                                </li>
                                <li>
                                  Kiểm tra khả năng nhận diện câu hỏi, nội dung
                                  câu hỏi và hiểu ngữ cảnh câu hỏi để tìm câu
                                  trả lời phù hợp.
                                </li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C.</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Part 3: Hội thoại ngắn
                            </td>
                            <td className="text-center">
                              30 câu (10 đoạn hội thoại, mỗi đoạn có 3 câu hỏi)
                            </td>
                            <td className="text-center">30 câu</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>
                                  Xuất hiện các đoạn hội thoại có ba người nói
                                  thay vì 2 người
                                </li>
                                <li>
                                  Người thi phải kết hợp những gì nghe được với
                                  biểu đồ/ bảng biểu cho sẵn để trả lời câu hỏi.
                                </li>
                                <li>
                                  Có câu hỏi buộc người đọc phải dựa vào những
                                  gì nghe được để đoán ý người nói.
                                </li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C, D</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Part 4: Cuộc nói chuyện ngắn hoặc độc thoại
                            </td>
                            <td className="text-center">
                              30 câu (10 đoạn, mỗi đoạn có 3 câu hỏi)
                            </td>
                            <td className="text-center">30 câu</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>
                                  Có dạng bài thí sinh phải kết hợp thông tin
                                  nghe với biểu đồ, hình ảnh được cho sẵn để trả
                                  lời.
                                </li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C, D.</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <div className="table-full-width table-responsive">
                      <div className="p-4 text-center w-100 text-white bg-brand font-12 font-weight-bold">
                        <span>READING – THI  ĐỌC</span>
                        <br /> <span>100 câu hỏi – 75 phút</span>
                      </div>
                      <Table bordered className="text-center">
                        <tbody>
                          <tr>
                            <td className="font-weight-semi">Part 5: Điền vào câu</td>
                            <td className="text-center">40 câu</td>
                            <td className="text-center">30 câu</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>Kiểm tra từ vựng và ngữ pháp của thí sinh</li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C.</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                                Part 6: Điền vào đoạn văn
                            </td>
                            <td className="text-center">12 câu hỏi (gồm 4 đoạn văn, mỗi đoạn 3 câu hỏi tương ứng)</td>
                            <td className="text-center">16 câu</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>
                                  Có dạng bài tập yêu cầu thí sinh điền một câu vào chỗ trống thay vì chỉ điền từ/ cụm từ.
                                </li>
                                <li>
                                  Kiểm tra ngữ pháp và từ vựng trong ngữ cảnh của một bài đọc
                                </li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C, D.</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                                Part 7: Đọc hiểu đoạn văn
                            </td>
                            <td className="text-center">
                            48 câu (đoạn đơn: 28 câu, đoạn kép: 20 câu)
                            </td>
                            <td className="text-center">54 câu(đoạn đơn 29 câu, đoạn phức 25 câu)</td>
                            <td className="text-left">
                              <ul className="pl-4">
                                <li>
                                Xuất hiện bài đọc bao gồm 3 đoạn.
                                </li>
                                <li>
                                Có bài đọc dạng tin nhắn điện thoại, chat, …
                                </li>
                                <li>
                                    Xuất hiện câu hỏi yêu cầu người thi điền câu vào chỗ trống.
                                </li>
                                <li>Dạng bài trắc nghiệm chọn A, B, C, D</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </section>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
