import { Header } from '@/components/Header'
import { motion } from 'framer-motion'

import {
  Heading,
  HeroContainer,
  BodyContainer,
  CalloutContainer,
} from '@/styles/pages/laws'
import Head from 'next/head'
import Image from 'next/image'

export default function LawsPage() {
  return (
    <>
      <Head>
        <title>Regras do Jogo — Futcharts</title>
      </Head>
      <HeroContainer>
        <div>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ bounce: 0, type: 'spring', duration: 0.5 }}
          >
            <Heading>
              Regras do <br /> Jogo
            </Heading>
            <span>2019/20</span>
          </motion.section>
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ bounce: 0, type: 'spring', duration: 0.5 }}
            width="400"
            height="300"
            viewBox="0 0 403 335"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M178.537 3.07218C179.074 4.64506 178.667 6.52778 177.157 7.78514L154.932 26.2837C154.343 26.7737 154.342 27.6942 154.95 28.1916C162.322 34.2175 174.808 45.1093 184.715 55.8582C187.555 58.9392 184.852 63.5225 180.978 63.1529C153.331 60.5148 130.474 63.5025 121.545 65.5666C121.391 65.6021 121.27 65.6608 121.148 65.7573C114.131 71.3229 97.0984 87.8048 79.0633 113.829C76.7334 117.191 71.2075 115.956 71.058 111.574C70.4504 93.758 72.5712 79.5448 74.537 71.397C74.8011 70.3025 73.7801 69.3841 72.8908 69.5927L51.4733 74.6178C47.4004 75.5734 44.3562 70.826 47.1637 67.5716L48.3864 68.6263L47.1637 67.5716C92.2836 15.2684 146.485 1.12609 174.47 0.307207C176.49 0.248115 177.993 1.47894 178.537 3.07218ZM175.48 4.11544C175.368 3.78601 175.089 3.52008 174.565 3.53542C147.377 4.33097 94.0697 18.1423 49.6091 69.6811C48.9187 70.4814 49.5981 71.7405 50.7356 71.4736L72.1531 66.4485C75.5882 65.6426 78.455 68.9277 77.6765 72.1545C75.7779 80.0238 73.6882 93.9452 74.2857 111.464C74.3048 112.022 74.6336 112.365 75.0873 112.488C75.5527 112.614 76.0689 112.48 76.4088 111.989C94.5947 85.7477 111.838 69.0201 119.141 63.227C119.64 62.8314 120.199 62.5629 120.817 62.42C130.087 60.2771 153.293 57.267 181.285 59.9379C181.855 59.9922 182.29 59.7055 182.508 59.293C182.719 58.892 182.698 58.4356 182.34 58.0471C172.577 47.4546 160.22 36.6705 152.906 30.6921C150.742 28.9231 150.701 25.6035 152.866 23.8014L175.09 5.30289L176.124 6.54402L175.09 5.30289C175.537 4.93108 175.6 4.46523 175.48 4.11544ZM311.352 47.0638C309.689 42.9686 314.416 39.1608 318.025 41.9431C328.124 49.7289 342.909 61.6453 354.883 72.8931C355.027 73.0287 355.198 73.1246 355.387 73.1767L367.257 76.453C368.294 76.7392 369.207 77.3969 369.794 78.3303C375.605 87.5751 388.837 113.104 402.482 152.328C403.248 154.531 402.168 156.515 400.676 157.566C399.195 158.609 396.99 158.971 395.127 157.721C389.289 153.805 384.445 151.943 381.189 150.923C380.643 150.753 380.004 151.055 379.795 151.69L365.693 194.529C364.293 198.783 358.184 198.516 357.17 194.147L342.925 132.776L344.498 132.411L342.925 132.776C342.878 132.572 342.794 132.428 342.706 132.336C340.442 129.975 335.041 125.932 325.649 121.12C316.292 116.327 303.054 110.813 285.195 105.473C281.273 104.3 280.805 98.7982 284.612 97.0865L323.347 79.6717C323.937 79.4063 324.212 78.72 323.968 78.1194L311.352 47.0638ZM316.053 44.5008C315.164 43.8155 313.869 44.6789 314.344 45.8483L326.961 76.9039C327.858 79.1137 326.847 81.6391 324.671 82.6173L285.937 100.032C284.93 100.485 284.988 102.04 286.12 102.378C304.14 107.767 317.565 113.35 327.122 118.246C336.645 123.124 342.411 127.363 345.037 130.101C345.582 130.67 345.912 131.359 346.071 132.046L360.316 193.417C360.59 194.598 362.244 194.677 362.625 193.519L376.727 150.68C377.458 148.46 379.833 147.115 382.154 147.841C385.64 148.933 390.779 150.915 396.926 155.039C397.459 155.397 398.195 155.363 398.817 154.925C399.428 154.495 399.615 153.915 399.432 153.389C385.843 114.327 372.707 89.0336 367.06 80.0491L368.427 79.1897L367.06 80.049C366.916 79.8204 366.683 79.645 366.397 79.5662L354.528 76.2899C353.832 76.0977 353.197 75.7403 352.672 75.2471L353.778 74.0701L352.672 75.247C340.809 64.1035 326.118 52.2603 316.053 44.5008ZM284.364 129.815C284.7 128.866 283.798 127.955 282.852 128.273L215.722 150.829C214.32 151.3 212.777 151.041 211.606 150.138L158.11 108.858C157.342 108.266 156.219 108.784 156.177 109.762L153.254 178.099C153.197 179.444 152.532 180.69 151.447 181.486L94.7597 223.072C93.9637 223.656 94.1706 224.893 95.1046 225.19L159.527 245.619C160.954 246.071 162.056 247.214 162.456 248.657L182.405 320.557C182.677 321.537 183.965 321.757 184.547 320.921L226.242 260.923C227.128 259.647 228.618 258.928 230.168 259.029L305.631 263.949C306.656 264.016 307.29 262.844 306.668 262.021L261.024 201.647C260.125 200.458 259.884 198.897 260.382 197.492L284.364 129.815ZM281.824 125.212C285.329 124.034 288.641 127.413 287.408 130.894L263.426 198.571C263.29 198.953 263.356 199.377 263.6 199.699L309.244 260.074C311.531 263.099 309.209 267.419 305.421 267.172L229.958 262.252C229.539 262.225 229.135 262.419 228.894 262.766L187.199 322.764C185.057 325.845 180.296 325.038 179.293 321.421L159.344 249.52C159.235 249.129 158.937 248.819 158.551 248.697L94.1284 228.268C90.6699 227.171 89.9275 222.612 92.8493 220.468L149.537 178.882C149.831 178.666 150.012 178.327 150.028 177.961L152.951 109.624C153.104 106.037 157.237 104.105 160.083 106.301L213.579 147.581C213.896 147.825 214.313 147.896 214.693 147.768L281.824 125.212ZM60.1961 213.441C60.4757 212.428 59.4194 211.574 58.492 212.051L24.2323 229.668C22.012 230.809 19.2885 229.891 18.2118 227.639L6.48459 203.106C5.93227 201.951 4.18291 202.348 4.20134 203.646L5.01254 260.781C5.01442 260.914 5.03701 261.038 5.07874 261.156C11.6067 279.569 22.1165 299.086 30.5734 312.992C33.8954 318.454 36.8876 323.029 39.1817 326.313C39.0085 325.1 38.895 323.868 38.8271 322.651C38.6336 319.185 38.8041 315.724 39.0832 312.963C39.3784 310.042 42.3773 308.437 44.9656 309.462L80.9805 323.727C82.1083 324.174 83.1203 322.847 82.3758 321.875L45.4109 273.61C44.5665 272.508 44.2879 271.073 44.6573 269.735L60.1961 213.441ZM41.0097 333.077C41.0094 333.078 41.0058 333.066 41.0016 333.042C41.0078 333.064 41.0099 333.076 41.0097 333.077ZM43.2568 331.589C43.2779 331.603 43.2881 331.612 43.2864 331.611C43.285 331.611 43.2753 331.604 43.2568 331.589ZM57.0151 209.179C60.4508 207.412 64.3358 210.581 63.3093 214.3L47.7705 270.594C47.67 270.958 47.746 271.348 47.9749 271.647L84.9397 319.911C87.6699 323.476 83.9746 328.387 79.7913 326.73L43.7763 312.465C43.04 312.173 42.3611 312.647 42.2964 313.287C42.0297 315.927 41.8698 319.213 42.0517 322.471C42.2348 325.752 42.7588 328.889 43.7904 331.296C43.913 331.582 44.0185 331.855 44.0919 332.103C44.1417 332.271 44.2667 332.698 44.1942 333.161C44.1532 333.424 44.0028 333.97 43.446 334.335C42.887 334.701 42.3242 334.619 42.0648 334.55C41.6102 334.429 41.272 334.141 41.1475 334.034C40.4996 333.48 39.4939 332.24 38.297 330.621C35.82 327.272 32.0719 321.671 27.8141 314.67C19.3016 300.673 8.66718 280.943 2.03477 262.235L3.55675 261.696L2.03477 262.235C1.87272 261.778 1.79005 261.304 1.78327 260.827L0.972066 203.692C0.90469 198.946 7.34487 197.418 9.39839 201.714L21.1256 226.246C21.4173 226.856 22.1542 227.105 22.7555 226.795L57.0151 209.179Z"
              fill="url(#paint0_linear_383_7)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_383_7"
                x1="81.107"
                y1="-6.59712"
                x2="295.068"
                y2="345.833"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0057FF" />
                <stop offset="1" stop-color="#0057FF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </HeroContainer>
      <BodyContainer>
        <CalloutContainer>
          <div>
            <p>
              Todas as informações são retiradas do manual &ldquo;Regras do
              Futebol 2019/20&ldquo; da Confederação Brasileira de Futebol
              autorizada pela International Football Association Board.
            </p>
            <strong>
              Todos os direitos são reservados à Confederação Brasileira de
              Futebol.
            </strong>
          </div>
        </CalloutContainer>
        <Heading type={'topics'}>Introdução</Heading>
        <p>
          O futebol é o esporte mais popular do planeta. Ele é jogado em todos
          os países nos mais diferentes níveis. As Regras do Jogo são as mesmas
          praticadas pelo mundo afora, desde a final da Copa do Mundo FIFA até
          uma partida entre crianças em um pequeno vilarejo.
        </p>
        <p>
          O fato de as mesmas Regras serem aplicadas nas partidas de todas as
          confederações, países, cidades e vilas ao redor do mundo é um forte
          fator para que a unidade das regras seja preservada. É também uma
          oportunidade que deve ser aproveitada para o bem do futebol em todos
          os lugares.
        </p>
        <p>
          O futebol deve ser praticado com base em Regras que propiciem o jogo
          limpo (Fair Play), pois um pilar crucial da beleza do &ldquo;jogo
          bonito&ldquo; é a sua legitimidade – esta é uma característica vital
          do &ldquo;espírito&ldquo; do jogo. Os melhores jogos são aqueles em
          que o árbitro é raramente requisitado, bem como aquele em que os
          jogadores o disputam sempre com respeito aos demais jogadores, aos
          árbitros e às Regras.
        </p>
        <p>
          A integridade das Regras e dos árbitros que as aplicam, deve sempre
          ser protegida e respeitada. Todos aqueles que possuem alguma
          autoridade, especialmente treinadores e os capitães das equipes, devem
          ter a clara responsabilidade durante a partida de respeitar os
          árbitros bem como suas decisões.
        </p>
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ bounce: 0, type: 'spring', delay: 0.3 }}
        >
          <Image
            src={'/laws-hero.png'}
            quality={100}
            width={1200}
            height={450}
            alt=""
            placeholder="blur"
            blurDataURL={'/laws-hero.png'}
          />
          <figcaption>
            Foto de{' '}
            <a href="https://unsplash.com/@piensaenpixel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Emilio Garcia
            </a>{' '}
            na{' '}
            <a href="https://unsplash.com/pt-br/fotografias/AWdCgDDedH0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </figcaption>
        </motion.figure>
        <p>
          O futebol deve ser agradável e prazeroso para os jogadores, árbitros,
          treinadores, bem como para os espectadores, fãs, administradores etc.
          As Regras devem garantir isso para que as pessoas, independente de
          idade, raça, religião, cultura, etnia, gênero, orientação sexual,
          condição especial ou qualquer outra diferença, queiram participar e se
          envolver com o futebol.
        </p>
        <p>
          As Regras do Jogo são relativamente simples, comparadas a outros
          esportes, mas como não é possível prever todas as situações, pode ser
          que muitas delas, porque são subjetivas, gerem debate e discussão.
        </p>
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ bounce: 0, type: 'spring', delay: 0.3 }}
        >
          <Image
            src={'/pitch.png'}
            quality={100}
            width={1200}
            height={450}
            alt=""
            placeholder="blur"
            blurDataURL={'/pitch.png'}
          />
          <figcaption>
            Foto de{' '}
            <a href="https://unsplash.com/@timtanzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Timothy Tan
            </a>{' '}
            na{' '}
            <a href="https://unsplash.com/pt-br/fotografias/PAe2UhGo-S4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </figcaption>
          <Heading type={'topics'}>Regra 01</Heading>
          <ol>
            <li>Superfície do campo</li>
            <p>
              O campo de jogo deve ser de superfície totalmente natural ou, se o
              regulamento da competição permitir, de superfície totalmente
              artificial. Também, se o regulamento da competição permitir, o
              campo de jogo pode ser totalmente natural e artificial – sistema
              híbrido (Não pode haver uma zona do campo com grama natural e
              outra com grama artificial).
            </p>
            <p>A cor das superfícies artificiais deve ser verde.</p>
            <p>
              Quando se utilizem superfícies artificiais em jogos de competição
              entre equipes representativas de federações nacionais de futebol
              filiadas na FIFA, ou em jogos internacionais de competições de
              clubes, a superfície deve cumprir os requisitos do Programa de
              qualidade da FIFA para gramas artificiais ou do International
              Match Standard, salvo se a IFAB conceder uma autorização especial.
            </p>
          </ol>
        </motion.figure>
      </BodyContainer>
    </>
  )
}
