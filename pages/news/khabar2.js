import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from '../../styles/Home.module.css'

const khabar2 = () => {
    return (
        <div>
           <Head>
        <title>خبر ورزشی -  برد پرگل دلفین گربدان مقابل قایقسازی رمچاه </title>
        <link rel='icon' href='/images/dolfin.png' />
        <meta name="keywords" content="دلفین گربدان مقابل قایقسازی رمچاه , خبر ورزشی مسابقات قشم , اخبار قشم"/>
        <meta name="description" content=" هفته پایانی رقابتهای لیگ دو امروز در حالی آغاز شد که در تک بازی امروز دلفین گربدان توانست قایقسازی رمچاه را گلباران کند. در این دیدار که برای دو تیم کاملأ تشریفاتی بود، دلفین گربدان توانست با گلهای یعقوب محمدی با نتیجه 5 بر 1 از سد قایقسازی رمچاه بگذرد تا با 11 امتیاز به کار خود در این فصل پایان دهد. "/>
      </Head>
          <Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <Row>
              <Col sm={12} className={styles.news1}>
                <h3> برد پرگل دلفین گربدان مقابل قایقسازی رمچاه </h3>
              </Col>

              <Col>
                <p className={styles.pp}>
                  هفته پایانی رقابتهای لیگ دو امروز در حالی آغاز شد که در تک
                  بازی امروز دلفین گربدان توانست قایقسازی رمچاه را گلباران کند.
                  در این دیدار که برای دو تیم کاملأ تشریفاتی بود، دلفین گربدان
                  توانست با گلهای یعقوب محمدی با نتیجه 5 بر 1 از سد قایقسازی
                  رمچاه بگذرد تا با 11 امتیاز به کار خود در این فصل پایان دهد.
                  از سویی قایقسازی رمچاه نیز که در این فصل موفق نشده بود امتیازی
                  کسب کند در این دیدار هم تن به شکست داد تا با نه شکست متوالی
                  بدترین رکورد ممکن را از آن خود کند.یعقوب محمدی با بثمر رساندن
                  پنج گل برای دلفین گربدان توانست به تنهایی 10 گل زده در صدر
                  جدول گلزنان قرار بگیرد و تک گل قایقسازی رمچاه را نیز حسام
                  اسلامی وارد دروازه دلفین گربدان کرد.
                </p>
                <p>رقابتهای لیگ دسته دو</p>
                <p>هفته نهم</p>
                <p>شنبه 96/10/02</p>
                <p className={styles.bazi}>دلفین گربدان 5 - 1 قایقسازی رمچاه</p>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default khabar2;