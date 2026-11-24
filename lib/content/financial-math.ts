import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const financialMath: Section = {
  slug: "financial-math",
  title: { en: "Financial Mathematics", ru: "Финансовая математика" },
  tagline: {
    en: "Interest, annuities, and derivatives",
    ru: "Проценты, аннуитеты и деривативы",
  },
  description: {
    en: "Financial mathematics prices money over time: compound interest, annuities and loans, bonds, and options. Put-call parity and the Black–Scholes formula show how no-arbitrage arguments determine prices.",
    ru: "Финансовая математика оценивает деньги во времени: сложные проценты, аннуитеты и кредиты, облигации и опционы. Паритет пут-колл и формула Блэка–Шоулза показывают, как рассуждения об отсутствии арбитража определяют цены.",
  },
  topics: [
    topic("time-value", "Time Value of Money", "Стоимость денег во времени", [
      p(
        "Money today is worth more than money tomorrow. Compound interest grows PV to FV = PV(1+r)ⁿ; continuous compounding uses e^{rt}. Discounting reverses the process.",
        "Деньги сегодня стоят больше, чем деньги завтра. Сложный процент превращает PV в FV = PV(1+r)ⁿ; непрерывное начисление использует e^{rt}. Дисконтирование обращает процесс.",
      ),
      formula(
        "FV = PV(1+r)^n, \\qquad FV = PV\\,e^{rt}",
        "FV = PV(1 + r)ⁿ;   FV = PV·e^(rt)",
      ),
    ]),
    topic("annuities", "Annuities and Loans", "Аннуитеты и кредиты", [
      p(
        "An annuity is a stream of equal payments. Its future value sums a geometric series; loan payments amortize principal and interest so the balance reaches zero at maturity.",
        "Аннуитет — поток равных платежей. Его будущая стоимость суммирует геометрическую прогрессию; кредитные платежи погашают основной долг и проценты так, что остаток к сроку равен нулю.",
      ),
      formula(
        "FV = P\\,\\frac{(1+r)^n - 1}{r}, \\qquad PV = P\\,\\frac{1 - (1+r)^{-n}}{r}",
        "FV = P·((1 + r)ⁿ − 1)/r;   PV = P·(1 − (1 + r)^(−n))/r",
      ),
    ]),
    topic("bonds", "Bonds and Yield", "Облигации и доходность", [
      p(
        "A bond's price is the present value of its coupons and face value, discounted at the yield y. Price and yield move oppositely; duration measures sensitivity.",
        "Цена облигации — приведённая стоимость её купонов и номинала, дисконтированных по доходности y. Цена и доходность движутся противоположно; дюрация измеряет чувствительность.",
      ),
      formula(
        "P = \\sum_{t=1}^{n}\\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^n}",
        "P = Σ C/(1 + y)ᵗ + F/(1 + y)ⁿ",
      ),
    ]),
    topic("options", "Options and Black–Scholes", "Опционы и Блэк–Шоулз", [
      p(
        "A call pays max(S−K, 0), a put max(K−S, 0). Put-call parity ties their prices by no-arbitrage. Black–Scholes prices European options from S, K, r, T, and volatility σ.",
        "Колл платит max(S−K, 0), пут — max(K−S, 0). Паритет пут-колл связывает их цены отсутствием арбитража. Блэк–Шоулз оценивает европейские опционы через S, K, r, T и волатильность σ.",
      ),
      formula(
        "C - P = S - Ke^{-rT}",
        "C − P = S − K·e^(−rT)",
        "Put-call parity",
        "Паритет пут-колл",
      ),
      formula(
        "C = S\\,\\Phi(d_1) - Ke^{-rT}\\Phi(d_2)",
        "C = S·Φ(d₁) − K·e^(−rT)·Φ(d₂)",
        "Black–Scholes (Φ is the normal CDF)",
        "Блэк–Шоулз (Φ — нормальная функция распределения)",
      ),
      note(
        "The striking fact: the expected return of the stock does not appear — risk-neutral pricing removes it.",
        "Поразительный факт: ожидаемая доходность акции не входит — риск-нейтральное ценообразование её убирает.",
      ),
    ]),
    topic("portfolio", "Portfolio Theory", "Теория портфеля", [
      p(
        "Markowitz: diversification cuts variance without cutting expected return. The efficient frontier collects optimal risk–return portfolios; correlations determine how much diversification helps.",
        "Марковиц: диверсификация снижает дисперсию, не снижая ожидаемую доходность. Эффективная граница собирает оптимальные портфели риск–доходность; корреляции определяют, насколько помогает диверсификация.",
      ),
      formula(
        "\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\rho\\sigma_1\\sigma_2",
        "σₚ² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂",
      ),
    ]),
    topic("capm", "CAPM and Beta", "CAPM и бета", [
      p(
        "Only systematic risk is priced: expected return = risk-free rate + β × market premium. Beta measures sensitivity to the market; idiosyncratic risk diversifies away.",
        "Ценообразуется только систематический риск: ожидаемая доходность = безрисковая ставка + β × премия рынка. Бета измеряет чувствительность к рынку; идиосинкратический риск диверсифицируется.",
      ),
      formula(
        "E[R_i] = R_f + \\beta_i\\big(E[R_m] - R_f\\big)",
        "E[Rᵢ] = R_f + βᵢ(E[Rₘ] − R_f)",
        "CAPM",
        "CAPM",
      ),
    ]),
    topic("binomial-pricing", "Binomial Option Pricing", "Биномиальное ценообразование опционов", [
      p(
        "Model the stock as up/down moves per step; replicate the option with stock + bond, or price by risk-neutral probabilities. As steps refine, the tree converges to Black–Scholes.",
        "Моделируем акцию движениями вверх/вниз за шаг; реплицируем опцион акцией + облигацией или оцениваем риск-нейтральными вероятностями. При измельчении шагов дерево сходится к Блэку–Шоулзу.",
      ),
      formula(
        "p = \\frac{e^{r\\Delta t} - d}{u - d}, \\qquad C = e^{-r\\Delta t}\\big(pC_u + (1-p)C_d\\big)",
        "p = (e^(rΔt) − d)/(u − d);   C = e^(−rΔt)(pCᵤ + (1 − p)C_d)",
        "Risk-neutral pricing step",
        "Шаг риск-нейтрального ценообразования",
      ),
    ]),
    topic("risk-measures", "Risk Measures: VaR and Beyond", "Меры риска: VaR и далее", [
      p(
        "Value-at-Risk is the loss threshold at a confidence level; expected shortfall averages losses beyond it (coherent, unlike VaR). Stress tests and Greeks (Δ, Γ, ν, Θ) complete the risk toolkit.",
        "Value-at-Risk — порог убытка на уровне доверия; ожидаемый недостаток усредняет убытки за ним (когерентен, в отличие от VaR). Стресс-тесты и греки (Δ, Γ, ν, Θ) дополняют инструментарий риска.",
      ),
      formula(
        "P(L > \\mathrm{VaR}_\\alpha) = 1 - \\alpha",
        "P(L > VaR(α)) = 1 − α",
      ),
    ]),
  ],
  problems: [
    prob(
      "fm1", "easy",
      "1000 invested at 5% annual compound interest for 2 years: find the future value.",
      "1000 вложено под 5% годовых (сложный процент) на 2 года: найдите будущую стоимость.",
      "1102.50",
      "1102,50",
      "1000·(1.05)² = 1000·1.1025 = 1102.5.",
      "1000·(1,05)² = 1000·1,1025 = 1102,5.",
    ),
    prob(
      "fm2", "easy",
      "Find the present value of 121 received in 2 years at 10%.",
      "Найдите приведённую стоимость 121, получаемых через 2 года при 10%.",
      "100",
      "100",
      "PV = 121/(1.1)² = 121/1.21 = 100.",
      "PV = 121/(1,1)² = 121/1,21 = 100.",
    ),
    prob(
      "fm3", "medium",
      "1000 at 5% continuously compounded for 1 year: find the value.",
      "1000 под 5% с непрерывным начислением на 1 год: найдите стоимость.",
      "1000·e^0.05 ≈ 1051.27",
      "1000·e^0,05 ≈ 1051,27",
      "FV = 1000·e^{0.05} ≈ 1000·1.05127 = 1051.27.",
      "FV = 1000·e^{0,05} ≈ 1000·1,05127 = 1051,27.",
    ),
    prob(
      "fm4", "medium",
      "A call has strike 100; the stock finishes at 110. What is the payoff?",
      "У колла страйк 100; акция завершила на 110. Какова выплата?",
      "10",
      "10",
      "max(S − K, 0) = max(110 − 100, 0) = 10.",
      "max(S − K, 0) = max(110 − 100, 0) = 10.",
    ),
    prob(
      "fm5", "hard",
      "With r = 0, S = 100, K = 95, and a call priced at 10, use put-call parity to price the put.",
      "При r = 0, S = 100, K = 95 и колле ценой 10 найдите цену пута по паритету пут-колл.",
      "5",
      "5",
      "P = C − S + K·e^{−rT} = 10 − 100 + 95 = 5.",
      "P = C − S + K·e^{−rT} = 10 − 100 + 95 = 5.",
    ),
  ],
};
