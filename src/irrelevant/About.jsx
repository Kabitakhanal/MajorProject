import React from 'react';
import styled, { keyframes } from 'styled-components';



// Keyframe animation for the text transition
const textAnimation = keyframes`
  from {
    transform: translateY(40%);
  }
  to {
    transform: translateY(-200%);
  }
`;

// Keyframe animation for the shadow transition
const shadowAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(200%);
  }
`;

// Styled components for the overlay and text
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  z-index: 100;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0.9) 80%,
    rgba(255, 255, 255, 0.25) 95%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const TextWrapper = styled.div`
  font-family: "Yanone Kaffeesatz";
  font-size: 100px;
  display: flex;
  position: absolute;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;

  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;

    .letter {
      transition: ease-out 1s;
      transform: translateY(40%);
    }

    .shadow {
      transform: scale(1, -1);
      color: #999;
      transition: ease-in 5s, ease-out 5s;
    }

    &:hover {
      .letter {
        animation: ${textAnimation} 1s ease-out forwards;
      }
      .shadow {
        animation: ${shadowAnimation} 5s ease-in forwards;
      }
    }
  }
`;

const About = () => {
  return (
    <>
      <Overlay />
      <TextWrapper>
        <div className='wrapper'>
          <div className='letter'>C</div>
          <div className='shadow'>C</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>l</div>
          <div className='shadow'>l</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>a</div>
          <div className='shadow'>a</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>s</div>
          <div className='shadow'>s</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>s</div>
          <div className='shadow'>s</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>i</div>
          <div className='shadow'>i</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>f</div>
          <div className='shadow'>f</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>y</div>
          <div className='shadow'>y</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>&nbsp;</div>
          <div className='shadow'>&nbsp;</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>n</div>
          <div className='shadow'>n</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>e</div>
          <div className='shadow'>e</div>
        </div>
          <div className='wrapper'>
          <div className='letter'>w</div>
          <div className='shadow'>w</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>s</div>
          <div className='shadow'>s</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>&nbsp;</div>
          <div className='shadow'>&nbsp;</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>a</div>
          <div className='shadow'>a</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>r</div>
          <div className='shadow'>r</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>t</div>
          <div className='shadow'>t</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>i</div>
          <div className='shadow'>i</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>c</div>
          <div className='shadow'>c</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>l</div>
          <div className='shadow'>l</div>
        </div>
        <div className='wrapper'>
          <div className='letter'>e</div>
          <div className='shadow'>e</div>
        </div>
      </TextWrapper>
    </>
  );
};

export default About;


/*const About = () => {
  return (
    <div className='about'>
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, in
      </div>
  )
}

export default About*/