import type { HomeDictionary } from "../types";

export const pt: HomeDictionary = {
  hero: {
    eyebrow: "Planejador de plantio para iPhone",
    title: "Semeie a coisa certa",
    highlight: "na hora certa.",
    subtitle:
      "O Sowly lê o clima da sua região e o tempo desta semana e diz quais hortaliças, frutas e ervas você pode começar hoje — na horta ou na varanda.",
    secondary: "Veja como funciona",
    badges: ["81 culturas", "Sem conta", "Sem anúncios, sem rastreamento"],
    screenshotAlt: "Tela Hoje do Sowly: 48 culturas prontas para semear, com temperatura do ar, do solo e da noite e previsão para sete dias.",
    chipSow: "Semear ao ar livre hoje",
    chipHarvest: "Colheita em 2 semanas",
    chipFrost: "Noite fria a caminho",
  },
  how: {
    eyebrow: "Como funciona",
    title: "Do seu tempo ao seu plano",
    subtitle: "Os pacotes de sementes dizem “semear de março a maio”. O Sowly olha para onde você mora e para o que a semana vai trazer.",
    steps: [
      { title: "Seu clima", text: "O Sowly lê o clima do seu local: como costuma ser a temperatura em cada mês e quando a geada chega e vai embora." },
      { title: "A previsão desta semana", text: "A previsão do Apple Weather mostra o que vem por aí: uma noite fria, uma onda de calor ou chuva forte." },
      { title: "Temperatura do solo", text: "Com os dois, o Sowly estima a temperatura do seu solo — é ela que decide se uma semente germina." },
      { title: "Seu plano", text: "Você recebe uma lista do que começar hoje e como: semear ao ar livre, semear dentro de casa ou transplantar para fora, sempre com uma estimativa de colheita." },
    ],
  },
  features: {
    eyebrow: "Recursos",
    title: "Tudo, da semente à colheita",
    subtitle: "Quatro telas que levam você do “o que posso semear?” até a primeira cesta.",
    items: [
      {
        label: "Hoje",
        title: "O que posso começar hoje?",
        text: "Abra o app e veja quais das 81 culturas estão prontas onde você mora — e se é melhor semeá-las ao ar livre, semeá-las dentro de casa ou transplantá-las para fora.",
        points: [
          "Temperatura do ar, do solo (estimada) e da noite em um relance",
          "Alertas de noites frias e geada, calor e chuva forte",
          "Uma data estimada de colheita para cada cultura",
        ],
        alt: "Tela Hoje com o número de culturas prontas para semear, a previsão da semana e um alerta de chuva forte.",
      },
      {
        label: "Página da cultura",
        title: "Por que agora — ou por que esperar",
        text: "Cada cultura se explica sozinha: por que hoje é um bom dia, ou o que ela ainda está esperando e quando chega a vez dela.",
        points: [
          "Uma linha do tempo com datas, da semeadura à colheita",
          "O ano da cultura: épocas de semeadura e de colheita",
          "Luz, rega, espaçamento, profundidade, temperatura do solo e tamanho do vaso, além de uma dica",
        ],
        alt: "Página do tomate: esperar nove semanas e semear dentro de casa a partir de 15 de janeiro, porque o solo ainda está frio demais.",
      },
      {
        label: "Horta",
        title: "Desenhe a sua horta",
        text: "Adicione canteiros no tamanho real — digamos 2 × 1 m — e vasos, depois arraste as culturas para dentro deles. Cada planta é desenhada com a largura do espaço de que precisa, e assim você vê o que cabe.",
        points: [
          "Canteiros e vasos nas proporções reais",
          "Marque cada planta como planejada ou semeada",
          "Várias hortas em lugares diferentes, cada uma com seu próprio clima (PRO)",
        ],
        alt: "Um canteiro de 2 × 1 m com alface, fava, alho e rabanete, e uma fileira de culturas da época para arrastar.",
      },
      {
        label: "Diário",
        title: "Acompanhe cada semeadura",
        text: "Cada semeadura ganha uma estimativa de colheita e um diário próprio, para que na próxima temporada você saiba o que deu certo.",
        points: [
          "Registro de crescimento: germinou, transplantada, em flor, primeira colheita, concluída",
          "Um diário de fotos e notas para cada planta",
          "Veja o que está crescendo e qual é a próxima colheita",
        ],
        alt: "Visão geral da horta: quatro culturas crescendo, uma em colheita, próxima colheita em 14 dias.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Planeje o ano inteiro",
    subtitle: "O Sowly diz de graça o que você pode começar hoje. O PRO enxerga mais longe e fica de olho por você.",
    items: [
      { title: "Planejador anual", text: "Épocas de semeadura e de colheita de cada cultura ao longo dos doze meses, calculadas para o seu clima." },
      { title: "Alertas inteligentes", text: "Um aviso quando o tempo ameaça suas plantas, quando uma colheita está chegando e quando uma cultura da sua lista de desejos entra na época." },
      { title: "Assistente da horta", text: "Pergunte sobre a sua horta e receba respostas escritas no seu dispositivo pela Apple Intelligence. Requer iOS 26 ou posterior e um iPhone compatível." },
      { title: "Memória da horta", text: "As colheitas que você registra ajustam as estimativas do ano seguinte, e assim o Sowly vai conhecendo a sua horta." },
      { title: "Hortas e semeaduras ilimitadas", text: "Casa, horta comunitária, varanda: quantas hortas e semeaduras você quiser, cada uma com seu próprio clima." },
    ],
    plansTitle: "Escolha o que combina com você",
    plans: ["Anual · 7 dias grátis", "3 meses", "Mensal", "Vitalício"],
    note: "As assinaturas são renovadas automaticamente até serem canceladas. Cancele quando quiser na sua conta da App Store.",
    screenshotAlt: "Planejador anual: épocas de semeadura, plantio e colheita de cada cultura, mês a mês.",
  },
  privacy: {
    eyebrow: "Privacidade",
    title: "A sua horta só diz respeito a você",
    text: "O Sowly funciona sem conta e sem um servidor que conheça você. O que você planta, fotografa e anota fica no seu iPhone.",
    points: [
      { title: "Sem conta", text: "Abra o app e comece. Sem cadastro, sem endereço de e-mail, sem senha." },
      { title: "Sem anúncios, sem rastreamento", text: "Sem publicidade e sem SDK de análise. Ninguém observa o que você faz no app." },
      { title: "Armazenado no seu iPhone", text: "Hortas, fotos e notas ficam no dispositivo. Apague o app e elas somem." },
      { title: "Assistente no dispositivo", text: "As respostas do assistente da horta são geradas pela Apple Intelligence no seu iPhone, não em uma nuvem." },
    ],
    staysTitle: "Fica no seu iPhone",
    stays: ["Hortas, canteiros e vasos", "Semeaduras e registro de crescimento", "Fotos e notas", "Perguntas ao assistente"],
    leavesTitle: "As únicas coisas que saem dele",
    leaves: [
      "Uma localização aproximada, arredondada para cerca de um quilômetro, enviada ao Apple Weather para obter o tempo e o clima",
      "As compras, processadas pela Apple e pelo RevenueCat com um ID anônimo",
    ],
    link: "Ler a política de privacidade",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Bom saber",
    items: [
      {
        q: "O que posso planejar com o Sowly?",
        a: "Hortaliças, frutas e ervas — 81 culturas, do tomate e da alface ao limão e ao manjericão. O Sowly é feito para o que se come, não para flores ornamentais.",
      },
      {
        q: "Qual é a precisão das datas?",
        a: "São estimativas calculadas a partir das médias climáticas do seu local e da previsão desta semana. São um bom guia, não uma garantia: o solo, as sementes e o tempo real podem deslocá-las.",
      },
      {
        q: "Funciona em uma varanda?",
        a: "Sim. Adicione vasos em vez de canteiros, e a página de cada cultura informa o tamanho de vaso de que ela precisa.",
      },
      {
        q: "O que é grátis e o que é PRO?",
        a: "As recomendações de hoje, as páginas das culturas e uma horta com um número limitado de semeaduras são grátis. O PRO acrescenta o planejador anual, os alertas inteligentes, o assistente da horta, a memória da horta e hortas e semeaduras ilimitadas.",
      },
      {
        q: "De qual iPhone eu preciso?",
        a: "Um iPhone com iOS 18 ou posterior. O assistente da horta requer iOS 26 ou posterior em um iPhone compatível com a Apple Intelligence.",
      },
      {
        q: "Por que o Sowly pede a minha localização?",
        a: "Para carregar o tempo e o clima da sua horta. Apenas uma posição aproximada, arredondada para cerca de um quilômetro, é enviada ao Apple Weather.",
      },
    ],
  },
  cta: {
    title: "Pronto quando a terra estiver",
    text: "Descubra o que você pode semear hoje — na sua horta, no seu clima, nesta semana.",
  },
};
