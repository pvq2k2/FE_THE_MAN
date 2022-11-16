import React from 'react'
import styles from './Contact.module.css'
type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044336!2d105.74459841473154!3d21.038127785993204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1663677788324!5m2!1svi!2s" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h1>Liên Hệ</h1>
          <div className={styles.contact1}>
            <h3>Địa chỉ chúng tôi</h3>
            <p>Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội, Việt Nam</p>
          </div>
          <div className={styles.contact1}>
            <h3>Email chúng tôi</h3>
            <p>cskh@theman.vn</p>
          </div>
          <div className={styles.contact1}>
            <h3>Điện thoại</h3>
            <p>0123456789</p>
          </div>
          <div className={styles.contact1}>
            <h3>Thời gian làm việc</h3>
            <p>Thứ 2 đến Thứ 7 từ 8h30 đến 17h30</p>
          </div>
        </div>
        <div className={styles.form}>
          <form action="/action_page.php">
            <div className={styles.row}>
              <div className={styles.col_25}>
                <label htmlFor={styles.lname} />
              </div>
              <div className={styles.col_75}>
                <input type="text" id="fname" placeholder="Họ Và Tên" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col_25}>
                <label htmlFor={styles.lname} />
              </div>
              <div className={styles.col_75}>
                <input type="text" id="fname" placeholder="Email" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col_25}>
                <label htmlFor="lname" />
              </div>
              <div className={styles.col_75}>
                <input type="text" placeholder="Số điện thoại" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col_25}>
                <label htmlFor="lname" />
              </div>
              <div className={styles.col_75}>
                <input type="text" id="lname" placeholder="Địa chỉ" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col_25}>
                <label htmlFor="subject" />
              </div>
              <div className={styles.col_75}>
                <textarea id="subject" name="subject" placeholder="Nội Dung" style={{ height: 200 }} defaultValue={""} />
              </div>
            </div>
            <br />
            <div className={styles.row}>
              <input type="submit" defaultValue="Gửi cho chúng tôi" />
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default ContactPage