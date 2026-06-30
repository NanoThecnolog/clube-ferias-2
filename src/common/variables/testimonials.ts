export interface Testimonials {
    name: string,
    location: string
    text: string,
    img: string
}

export const testimonials: Testimonials[] = [
    {
        name: "José Cândido Póvoa",
        location: "Goiânia - GO",
        text: "Quando meu neto nasceu em Londrina, no Paraná, queríamos estar presentes e decidimos viajar imediatamente. Da estrada mesmo, à noite, fomos muito bem atendidos pela Bancorbrás para fazer as reservas de hospedagem necessárias. Quando chegamos lá, estava tudo pronto nos aguardando. Foi uma experiência muito interessante que tivemos como clientes. Sempre fomos perfeitamente atendidos.",
        img: 'jose.jpg'
    },
    {
        name: "Frederico Amorim Souto",
        location: "Itaúna - MG",
        text: "Tivemos experiências extraordinárias em resorts (Costão do Santinho, Sauipe, Guarajuba, Salvador) que, dificilmente, conseguiríamos reproduzir sem a Bancorbrás. Na verdade, desde a pequena pousada em uma área rural ou praia distante até o mais incrível hotel de lazer, contamos sempre com facilidade e segurança. Cada sonho nosso (pelo menos de viagens) tem sido, a cada ano, viabilizado pela Bancorbrás.",
        img: "frederico.jpg"
    },
    {
        name: "Ana Luiza Costa Borges",
        location: "Rio de Janeiro - RJ",
        text: "Como cliente, considero que todas as viagens foram especiais. Pelo Clube, já me hospedei em resorts muito especiais, como em Foz do Iguaçu; visitei Tamandaré, em Pernambuco; e tive a oportunidade de conhecer a Argentina, em uma das agendas do Encontro Bancorbrás da Melhor Idade.",
        img: "ana.jpg"
    },
    {
        name: "Ailon Almeida Dias",
        location: "Brasília - DF",
        text: "Espero ainda viajar muitas vezes como cliente Bancorbrás. Já indiquei o Clube de Turismo a vários amigos. Para falar a verdade, atualmente nossa comitiva já está bem maior. Já viajamos com um grupo que pode ser considerado grande: minha filha e sua família, meu cunhado e o namorado da minha neta.",
        img: "ailon.jpg"
    },
]
