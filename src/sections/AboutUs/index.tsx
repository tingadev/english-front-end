import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Table,
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
                    <h3 className="title">
                      1. WHAT - Lịch sử TOEIC – nó là gì?
                    </h3>
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
                  <section>
                    <h4>
                      {" "}
                      1.2. 1.2.	Bố cục một bài thi TOEIC 2 kỹ năng Speaking and Writing (TOEIC Nói và Viết)
                    </h4>
                    <div className="table-full-width table-responsive">
                      <div className="p-4 text-center w-100 text-white bg-brand font-12 font-weight-bold">
                        <span>SPEAKING – THI NÓI</span>
                        <br /> <span>11 câu hỏi – 20 phút</span>
                      </div>
                      <Table bordered className="text-center">
                        <thead>
                          <th>Phần thi</th>
                          <th style={{width: '15%'}}>Số câu hỏi</th>
                          <th>Yêu cầu</th>
                          <th>Tiêu chí đánh giá</th>
                          <th>Thang điểm</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 1: Đọc thành tiếng
                            </td>
                            <td className="text-center">2 (Câu 1, 2)</td>
                            <td className="text-center">Đọc một đoạn văn có sẵn (được chuẩn bị 45 giây và trình bày trong 45 giây tiếp theo)</td>
                            <td className="text-left">
                              Mục đích kiểm tra 3 phần sau:
                              <ul className="pl-4">
                                <li>Ngữ điệu</li>
                                <li>Trọng âm</li>
                                <li>Phát âm</li>
                              </ul>
                            </td>
                            <td>0-3 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 2: Miêu tả
                            </td>
                            <td className="text-center">1 (Câu 3)</td>
                            <td className="text-center">Miêu tả chính xác một bức ảnh</td>
                            <td className="text-left border-0 ">
                              Bài nói được đánh giá dựa trên 3 tiêu chí lớn sau:
                              <ul className="pl-4">
                                <li>Phát âm, ngữ điệu, trọng âm</li>
                                <li>Ngữ pháp, từ vựng, tính liên kết</li>
                                <li>Tương thích với nội dung</li>
                              </ul>
                            </td>
                            <td>0-3 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 3: Hỏi đáp
                            </td>
                            <td className="text-center">3 (Câu 4,5,6)</td>
                            <td className="text-center">Trả lời câu hỏi</td>
                            <td className="text-left border-0 ">
                              
                            </td>
                            <td>0-3 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 4: Trả lời câu hỏi
                            </td>
                            <td className="text-center">3 (Câu 7,8,9)</td>
                            <td className="text-center">Sử dụng thông tin được cung cấp và trả lời câu hỏi</td>
                            <td className="text-left border-0 ">
                              
                            </td>
                            <td>0-3 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 5: Trả lời câu hỏi
                            </td>
                            <td className="text-center">1 (Câu 10)</td>
                            <td className="text-center">Đề xuất giải pháp đối với một vấn đề</td>
                            <td className="text-left border-0 ">
                              
                            </td>
                            <td>0-5 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 6: Trình bày
                            </td>
                            <td className="text-center">1 (Câu 11)</td>
                            <td className="text-center">Trình bày quan điểm của mình</td>
                            <td className="text-left border-bottom border-top-0">
                              
                            </td>
                            <td>0-5 điểm</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <div className="table-full-width table-responsive">
                      <div className="p-4 text-center w-100 text-white bg-brand font-12 font-weight-bold">
                        <span>WRITING – THI VIẾT</span>
                        <br /> <span>08 câu hỏi – 60 phút</span>
                      </div>
                      <Table bordered className="text-center">
                        <thead>
                          <th>Phần thi</th>
                          <th style={{width: '15%'}}>Số câu hỏi</th>
                          <th>Yêu cầu</th>
                          <th>Tiêu chí đánh giá</th>
                          <th>Thang điểm</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 1: Viết theo ảnh
                            </td>
                            <td className="text-center">5 (Câu 1,2,3,4,5)</td>
                            <td className="text-center">Dựa vào bức hình cho sẵn để viết câu</td>
                            <td className="text-left">
                              Đánh giá dựa trên 2 yếu tố:
                              <ul className="pl-4">
                                <li>Sự phù hợp giữ các câu trả lời và nội dung bức ảnh</li>
                                <li>Các điểm ngữ pháp được sử dụng đúng</li>
                              </ul>
                            </td>
                            <td>0-3 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 2: Phản hồi một yêu cầu
                            </td>
                            <td className="text-center">2 (Câu 6,7)</td>
                            <td className="text-center">Viết lời hồi đáp cho một yêu cầu</td>
                            <td className="text-left">
                              Đánh giá dựa trên 2 yếu tố: 
                              <ul className="pl-4">
                                <li>Độ chính xác và sự đa dạng các mẫu câu</li>
                                <li>Tương thích với nội dung</li>
                              </ul>
                            </td>
                            <td>0-4 điểm</td>
                          </tr>
                          <tr>
                            <td className="font-weight-semi">
                              Phần 3: Viết bài luận
                            </td>
                            <td className="text-center">1 (Câu 8)</td>
                            <td className="text-center">Viết bài luận để nêu rõ quan điểm</td>
                            <td className="text-left ">
                            Đánh giá dựa trên 4 yếu tố:
                            <ul className="pl-4">
                                <li>Các luận cứ (supporting ideas) củng cố quan điểm</li>
                                <li>Bố cục sắp xếp của bài viết</li>
                                <li>Điểm từ vựng</li>
                                <li>Điểm ngữ pháp</li>
                              </ul>
                            </td>
                            <td>0-5 điểm</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="text-center">
                      <img src={require('../../assets/img/a5.png')} alt=""/>
                      <br />
                      <i className="font-weight-bold text-primary">
                      Bằng TOEIC do ETS cấp
                      </i>
                      <p className="text-left my-3">Thông thường, sau khi các bạn thi xong từ 5-7 ngày ETS sẽ trả kết quả cho bạn dưới dạng phiếu báo điểm. Như thường lệ, các trường Đại học chỉ cần bạn nộp phiếu báo điểm Toeic là đủ. Nếu cẩn thận hơn bạn có thể thông báo ETS cấp cho bạn bằng TOEIC với mức lệ phí là 230,000 VNĐ (tính tại năm 2020).</p>
                      <img src={require('../../assets/img/a6.png')} alt=""/>
                      <br />
                      <i className="font-weight-bold text-primary">
                      Phiếu báo điểm TOEIC do ETS cấp
                      </i>
                    </div>
                  </section>
                </div>
              </Container>
              <Container>
              <Row>
                  <Col className="" md="8">
                    <h3 className="title">
                      2.	WHO - TOEIC giành cho ai?
                    </h3>
                  </Col>
                </Row>
                <p>
                TOEIC giành cho tất cả mọi người! Chỉ cần bạn muốn có một CV đẹp trong mắt nhà tuyển dụng, một điều kiện cần để hội nhập quốc tế - làm việc trong các công ty đa quốc gia tại Việt Nam hay ra ngoài phạm vi quốc tế. Ngoài ra, nếu bạn là người đam mê truyền đạt tiếng Anh đặc biệt là tiếng Anh thương mại thì TOEIC chính là một trong những bằng cấp giá trị nhất khẳng định khả năng tiếng Anh thương mại của bạn. 
                </p>
                <div className="text-center">
                <img src={require('../../assets/img/a7.png')} alt=""/>
                </div>
                <p>Dưới đây là danh sách các trường yêu cầu đầu ra TOEIC đối với sinh viên chuyên và không chuyên ngoại ngữ</p>
                <div className="text-center mt-3">
                <img src={require('../../assets/img/a8.png')} alt=""/>
                </div>
                <p className="mt-3 font-weight-semi">Sau đây là danh sách một số công ty và tập đoàn lớn tại Việt Nam yêu cầu điểm số TOEIC đối với nhân viên mới hoặc nhân viên đang công tác phải đáp ứng tối thiểu để đảm bảo công việc tại cơ sở:</p>
                <ul className="mt-3 font-11 list-number font-weight-medium">
                  <li >Agribank yêu cầu 450 TOEIC trở lên.</li>
                  <li >ACB và Sacombank yêu cầu TOEIC 500 trở lên.</li>
                  <li >Techcombank yêu cầu 600 TOEIC trở lên đối với một số vị trí; tuyển Chuyên viên quản lý tài sản yêu cầu TOEIC 405-500.</li>
                  <li>Vietcombank yêu cầu đầu vào 650 TOEIC trở lên – vì thế mà lương + thưởng của VCB cao hơn các ngân hàng khác.</li>
                  <li>FPT yêu cầu nhân viên phải đạt 500 TOEIC tiếng Anh mới đủ điều kiện làm việc. Một số vị trí yêu cầu mức điểm trên 800 TOEIC.</li>
                  <li>Vietnam Airlines yêu cầu 400 TOEIC đầu vào cho các vị trí. Sinh viên thi tuyển làm phi công cũng cần số điểm là 400 TOEIC đầu vào.</li>
                  <li>VNext Software (một công ty Nhật Bản) yêu cầu TOEIC 850+ cho vị trí Accountant, HR, Admin.</li>
                  <li>Samsung yêu cầu bài thi GSAT và TOEIC đầu vào. Nhân viên R&D của Samsung yêu cầu phải có 530 TOEIC.</li>
                  <li>Fujitsu yêu cầu 730 TOEIC cho nhân viên thường xuyên phải sử dụng tiếng Anh, 600 TOEIC cho Engineer, Researcher, Planner, Sales personnel; 500 TOEIC đối với các vị trí khác.</li>
                  <li>Đối với Packard Bell (Pháp), Kỹ sư Kiểm soát Chất lượng cần đạt 650 TOEIC, Cán bộ Mua hàng cần đạt 850 TOEIC</li>
                  <li>Hãng điện tử LG tuyển nhân viên kinh doanh các mặt hàng Gia dụng, thiết bị giải trí gia đình hay di động yêu cầu tiêu chuẩn Tiếng Anh phải có TOEIC trên 500.</li>
                  <li>Hãng hàng không JetStar hay VietjetAIR khi tuyển tiếp viên hàng không đều yêu cầu TOEIC 400 trở lên. Ở những vị trí khác (Nhân viên hành chính, phục vụ mặt đất, …) điểm TOEIC yêu cầu cao hơn, dao động từ TOEIC 500-700.</li>
                  <li>Mobifone tuyển Chuyên Viên Kinh Doanh yêu cầu TOEIC 450 trở lên.</li>
                  <li>Công ty Nhật Bản ITOCHU tuyển nhân viên kế toán tổng hợp – General Accountant yêu cầu TOEIC 700 trở lên. Nếu bạn giỏi kế toán, thích làm việc tại công ty nước ngoài, nhưng Tiếng Anh không tốt thì xem như mất cơ hội.</li>
                  <li>Hãng điện tử LG tuyển nhân viên kinh doanh các mặt hàng Gia dụng, thiết bị giải trí gia đình hay di động yêu cầu tiêu chuẩn phải có TOEIC trên 500.</li>
                  <li>Lĩnh vực IT, công ty ISTT tuyển kỹ sư hệ thống CNTT và viễn thông yêu cầu TOEIC trên 500.</li>
                  <li>Công ty Yamaha tuyển nhân viên Sale & Marketing yêu cầu TOEIC trên 500.</li>
                  <li>Tập đoàn viễn thông Quân đội Viettel tuyển Nhân viên Quan hệ công chúng, Nhân viên truyền thông yêu cầu TOEIC trên 600.</li>
                </ul>
              </Container>
              <Container>
              <Row>
                  <Col className="" md="8">
                    <h3 className="title">
                      3.	WHY - Vì sao nên thi TOEIC?
                    </h3>
                  </Col>
                </Row>
                <div className="text-center">
                <img src={require('../../assets/img/a9.png')} alt=""/>
                </div>
                <p>
                Bạn biết không, TOEIC không chỉ đơn giản là một kỳ thi,nó còn là chiếc c hìa khóa vàng dẫn đến thành công. Kỳ thi này giúp các bạn sinh viên mới ra trường hoặc những người đi làm muốn có công việc mong muốn hoặc cơ hội thăng tiến cao hơn trong sự nghiệp. Với hơn 40 năm hình thành và phát triển, kỳ thi TOEIC nói chung, và bài thi TOEIC Listening and Reading (Thi TOEIC 2 kỹ năng Nghe và Đọc) đã giúp hàng triệu người khắp nơi trên thế giới nắm bắt được các cơ hội quý giá trong nghề nghiệp. Nếu điểm TOEIC của bạn đẹp thì bạn sẽ có thể:
                </p>
                <ul className="mt-3 font-11 list-number font-weight-medium">
                  <li >Tự biến mình thành một ứng cử viên nặng ký cho bất kỳ cơ hội việc làm nào ở Việt Nam và trên thế giới;</li>
                  <li >Mô tả chính xác với nhà tuyển dụng biết khả năng giao tiếp liên văn hóa với đồng nghiệp, cấp trên và với khách hàng đặc biệt là những người nói tiếng Anh 100%;</li>
                  <li>Nắm gần như chắc chắn cơ hội được tuyển dụng và các quyết định thăng chức khác trong công ty nơi mà TOEIC được xem là thước đo năng lực tiếng Anh của nhân viên;</li>
                  <li>Được đề xuất tăng lương đáng kể khi đi làm ở các công ty đa quốc gia sử dụng tiếng Anh và xem trọng tiếng Anh.</li>
                </ul>
              </Container>
              <Container>
              <Row>
                  <Col className="" md="8">
                    <h3 className="title text-brand">
                      4.	WHEN - Khi nào nên thi TOEIC?
                    </h3>
                  </Col>
                </Row>
                <div className="text-center">
                <img src={require('../../assets/img/a10.png')} alt=""/>
                </div>
                <p>
                Bất kỳ lúc nào bạn cảm thấy sẵn sàng với kỳ thi TOEIC thì hãy đăng ký ngay! Để thật sự sẵn sàng cho bất kỳ kỳ thi nào thì điều bạn cần phải có đó chính là kiến thức, kỹ năng và kinh nghiệm làm bài. Kiến thức và kỹ năng có thể được trau dồi mỗi ngày qua việc học còn kinh nghiệm làm bài thì cần bạn phải cọ xát thực tế - tiếp xúc với các đề thi thật. Kỹ năng và kiến thức tiếng Anh đặc biệt là Tiếng Anh thương mại giúp bạn tự tin và hoàn thành bài thi thật tốt, nhưng chính kinh nghiệm làm bài mới quyết định bạn có đạt điểm tối đa hết mức khả năng của bạn hay không. Hãy tìm đến những chương trình học có luyện tập cho bạn khả năng phản xạ với đề thi thật bạn nhé.
                </p>
              </Container>
              <Container>
              <Row>
                  <Col className="" md="8">
                    <h3 className="title">
                    5.	WHERE Đăng ký thi TOEIC ở đâu?
                    </h3>
                  </Col>
                </Row>
                <p>
                Hiện tại, các bạn thí sinh có thể đăng ký thi trực tiếp tại văn phòng IIG Việt Nam là đại diện quốc gia của ETS (Educational Testing Service - Viện Khảo thí Giáo dục Hoa Kỳ) ở các địa chỉ dưới đây hoặc đăng ký online bài thi TOEIC. Lệ phí thi sẽ được cập nhật chính xác nhất khi các bạn liên hệ các địa chỉ của IIG bên dưới:
                </p>
                <div>
                  <h4>Văn phòng Hà Nội</h4>
                  <p>Tầng 3, Trung Yên Plaza, số 1 Trung Hòa, Cầu Giấy, Hà Nội</p> 
                  <h4>Văn phòng Đà Nẵng</h4>
                  <p>Số 19 Hoàng Văn Thụ, Quận Hải Châu, Thành phố Đà Nẵng</p> 
                  <h4>Văn phòng Tp. Hồ Chí Minh </h4>
                  <p>Tầng 1, Tháp 1, Tòa nhà The Sun Avenue, Số 28 Mai Chí Thọ, P. An Phú, Quận 2, TP. Hồ Chí Minh</p> 
                  
                  <h4>Thông tin liên hệ </h4>
                  <p><span className="font-weight-semi">Email:</span> info@iigvietnam.edu.vn </p>
                  <p><span className="font-weight-semi">Hotline:</span> 1900 636 929</p>
                </div>
              </Container>
              <Container>
              <Row>
                  <Col className="" md="8">
                    <h3 className="title">
                    6.	HOW - Làm thế nào để đạt điểm mong muốn trong TOEIC?
                    </h3>
                  </Col>
                </Row>
                <div className="text-center">
                <img src={require('../../assets/img/a11.png')} alt=""/>
                </div>
                <p>
                Muốn đạt được điểm mong muốn trong kỳ thi TOEIC, bạn cầ có các yếu tố sau:
                </p>
                <ul className="mt-3 font-11 list-number font-weight-medium">
                <li>Làm một bài test thi thử xác thực tế để đánh giá đúng điểm xuất phát của bạn</li>
                <li>Lên kế hoạch ôn tập chi tiết cho phần Ngôn ngữ, Kỹ Năng và Kinh nghiệm</li>
                <li>Xem xét khả năng tự học hoặc tìm thầy cô hướng dẫn;</li>
                <li>Kiên trì trong một khoản thời gian ít nhất 3 tháng để đạt kết quả tốt nhất.</li>
               </ul>
               <p>Nếu các bạn muốn thi thử TOEIC để kiểm tra khả năng của mình đang ở đâu, hãy đăng ký <a href="javascript:0;">tại đây</a>.</p>
               <p>Bài giới thiệu trên đây thầy đưa ra nhằm giúp các bạn có cái nhìn chung nhất về tầm quan trọng của kỳ thi TOEIC. Hãy tìm hiểu thật kỹ trước khi bắt đầu bởi nó sẽ giúp bạn tiến xa hơn trên con đường sự nghiệp của bạn. Thầy chúc các bạn luôn thành công!</p>
              <div className="d-flex justify-content-end">
                <h3>CEO Dương Thái Lực</h3>
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
