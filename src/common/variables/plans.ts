export interface PlansClub {
    name: string,
    daily: string
    type: 'duplo' | 'triplo'
    value: number
    arguments: string[]
    color: string
}

export const plansClub: PlansClub[] = [
    {
        name: "Executivo",
        daily: "7 Diárias por plano",
        type: "duplo",
        value: 274,
        arguments: [
            "Mais liberdade para viajar pagando menos e aproveitando ao máximo sua viagem.",
            "Une preço competitivo e um pacote completo de benefícios.",
            "Ideal para viagens de 2 adultos por quarto."
        ],
        color: "#02E6CA"
    },
    {
        name: "Executivo",
        daily: "7 Diárias por plano",
        type: "triplo",
        value: 323,
        arguments: [
            "Para quem gosta de viajar junto e quer maximizar benefícios.",
            "O melhor custo benefício para aproveitar ao máximo suas viagens.",
            "Ideal para 3 adultos por quarto, com conforto e comodidade."
        ],
        color: "#E5E137"
    },
    {
        name: "Superior",
        daily: "7 Diárias por plano",
        type: "duplo",
        value: 379,
        arguments: [
            "Mais conforto, exclusividade e atendimento diferenciado.",
            "Para quem gosta de aproveitar a hospedagem com o máximo de conforto.",
            "Ideal para viagens de 2 adultos por quarto."
        ],
        color: "#F28C1C"
    },
    {
        name: "Superior",
        daily: "7 Diárias por plano",
        type: "triplo",
        value: 465,
        arguments: [
            "Experiência premium para quem viaja em grupo e não abre mão do conforto.",
            "Une flexibilidade, economia e alto padrão de hospedagem.",
            "Ideal para viagens de 3 adultos por quarto."
        ],
        color: "#9B4AF3"
    }
]