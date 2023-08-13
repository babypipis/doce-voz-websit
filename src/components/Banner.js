import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["palavras doces", "através da telemensagem", "e ilumine o dia de alguém"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>




                  <h1>
                    {`Envie `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "palavras doces", "através da telemensagemr", " eilumine o dia de alguém com" ]'
                    ><span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Faça aqueles que você ama se sentirem verdadeiramente especiais. Surpreenda-os enviando telemensagens emocionantes,
                    cuidadosamente selecionadas para cada momento único. Nossas telemensagens vão além das palavras, com fundos musicais que
                    ecoam sentimentos profundos.
                  </p>
                  <p>
                    Seja um aniversário, um aniversário de casamento, ou qualquer ocasião especial, nossas telemensagens trazem um toque
                    pessoal que é impossível de esquecer. Transforme a simplicidade de uma mensagem telefônica em um presente emocional que
                    será valorizado para sempre.
                  </p>
                  <p>
                    Não espere pelo momento perfeito. Crie-o com nossas telemensagens e faça com que a magia das palavras e da música
                    ilumine o dia daqueles que são importantes para você.
                  </p>


                  <button onClick={() => console.log('connect')}>Baixa o App <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={8} md={4} xl={3.9}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
