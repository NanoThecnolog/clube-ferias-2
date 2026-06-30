import { IconType } from "react-icons"
import { CiViewList } from "react-icons/ci"
import { PiCashRegisterLight } from "react-icons/pi"
import { BsGlobeAmericas } from "react-icons/bs"

export interface HowWorkProps {
    title: string,
    text: string,
    icon: IconType
}

export const howWorkTexts: HowWorkProps[] = [
    {
        title: "Escolha o seu plano",
        text: "Temos 2 planos de hospedagem e você pode escolher e personalizar para se adaptar à sua realidade.",
        icon: CiViewList
    },
    {
        title: "Pagamento programado",
        text: "Você escolhe a melhor data e forma de efetuar o pagamento, com parcelas mensais que cabem no seu orçamento.",
        icon: PiCashRegisterLight
    },
    {
        title: "Milhares de opções para viajar",
        text: "Escolha entre nossas opções de destinos e hotéis o de sua preferência. Se precisar de ajuda, o Clube estará pronto para te auxiliar!",
        icon: BsGlobeAmericas
    },
]