import BurgerMenu from "@/assets/BurgerMenu";
import CheckIcon from "@/assets/CheckIcon";
import MainLogo from "@/assets/MainLogo";
import Image from "next/image";

export default function Home() {
  const benefitsArray = [
    {
      id: 1,
      text: "Praktyczna wiedza i umiejętności, które można natychmiast zastosować",
    },
    {
      id: 2,
      text: "Szkolenie dopasowane do indywidualnych potrzeb Twojej ekipy",
    },
    {
      id: 3,
      text: "Tematyka warsztatów dostosowana do potrzeb ekipy",
    },
    {
      id: 4,
      text: "Możliwość poznania najnowszych, innowacyjnych rozwiązań i produktów firmy Selena z pierwszej ręki!",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex justify-between w-full py-4 bg-[url('/assets/background_m.png')]">
        <MainLogo />
        <BurgerMenu />
      </div>
      <div className="py-4 mb-[120px]">
        <p>Strona główna</p>
      </div>
      <h1 className="text-white text-3xl font-black py-4">
        Warsztaty na Budowie z Akademią Tytan
      </h1>
      <div className="bg-neutral-100 p-4 mt-4">
        <h2 className="text-black text-stone-900 text-[17px] font-black">
          Dlaczego warto
        </h2>
        {benefitsArray.map((e) => {
          return (
            <div key={e.id} className="flex justify-between gap-2 p-2">
              <CheckIcon width={16} />
              <p className="text-black text-stone-900 text-base font-normal leading-snug">
                {e.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className="bg-white rounded-bl-sm rounded-br-sm shadow flex items-center justify-between flex-col">
        <div className="flex">
          <p className="opacity-50 text-stone-900 text-base font-normal leading-snug">
            Cena:
          </p>
          <div className="p-4">
            <p className="flex items-center text-stone-900 text-xl font-black line-through">
              1789 zl
              <p className="text-right text-stone-900 text-base font-normal line-through leading-snug  pl-1">
                +23% VAT
              </p>
            </p>
            <p class="text-right text-lime-600 text-2xl font-black">
              Bezpłatne
            </p>
          </div>
        </div>
        <button class="w-[296px] h-[53px] px-5 py-[13px] my-4 bg-lime-600 rounded-sm justify-center items-center gap-2 inline-flex">
          <p class="text-center text-white text-xl font-semibold font-['Source Sans Pro'] leading-[27px]">
            Zapytaj o warsztaty
          </p>
        </button>
      </div>
      <p className="py-12 text-stone-900 text-lg font-normal leading-normal">
        Zainicjuj transformację swojego zespołu już dziś. Zaproś ekipę ekspertów
        Akademii Tytan na swoją budowę! Oferujemy praktyczne szkolenia
        prowadzone przez doświadczonych specjalistów, którzy zaprezentują
        nowoczesne techniki i rozwiązania budowlane. Każdy uczestnik będzie miał
        okazję obserwować i brać udział w rzeczywistych pracach budowlanych,
        gwarantując bezpośrednie doświadczenie i umiejętności, które można od
        razu wprowadzić w praktykę.
      </p>
      <h4 className="w-80 text-stone-900 text-3xl font-black py-4">
        Zakres warsztatów
      </h4>
      <h5 className="w-80 text-stone-900 text-lg font-bold leading-normal py-2">
        Praktyczne Zastosowanie Produktów Selena
      </h5>
      <p className="w-80 text-stone-900 text-lg font-normal leading-normal">
        Podczas warsztatów szczegółowo omawiamy, jak efektywnie wykorzystać
        produkty Selena w codziennej pracy. Oferujemy demonstracje i ćwiczenia,
        które pomagają uczestnikom zrozumieć, jak maksymalizować korzyści
        płynące z zastosowania naszych rozwiązań.
      </p>
      <h5 className="w-80 text-stone-900 text-lg font-bold leading-normal py-2">
        Najnowsze Trendy i Technologie w Budownictwie
      </h5>
      <p className="w-80 text-stone-900 text-lg font-normal leading-normal">
        Z nami Twoja ekipa będzie zawsze o krok przed konkurencją! Przekazujemy
        wiedzę o najnowszych trendach i innowacjach w branży, pomagając w
        praktyczny sposób wprowadzić je do codziennej pracy.
      </p>
      <h5 className="w-80 text-stone-900 text-lg font-bold leading-normal py-2">
        Bezpieczeństwo i Ochrona Zdrowia w Pracy
      </h5>
      <p className="w-80 text-stone-900 text-lg font-normal leading-normal">
        Bezpieczeństwo jest dla nas priorytetem. W trakcie warsztatów uczestnicy
        zdobędą wiedzę na temat najważniejszych praktyk związanych z
        bezpieczeństwem i ochroną zdrowia w miejscu pracy.
      </p>
    </main>
  );
}
