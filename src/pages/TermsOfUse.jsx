import React from "react";
import TextBlock from "../components/TextBlock/TextBlock";

const TermsOfUse = () => {
    return (
        <div className="container w-full flex flex-col px-6 py-12 text-justify">
            <h1 className="text-center font-bold text-3xl">
                Умови використання сайту
            </h1>
            <TextBlock
                title="Використання сайту"
                text="Сайт дозволяє вам переглядати та завантажувати матеріали цього сайту (далі «Сайт») тільки для особистого некомерційного використання, за умови збереження вами всієї інформації про авторське право та інших відомостей про право власності, що містяться у вихідних матеріалах і будь-яких їхніх копіях. Заборонено змінювати матеріали цього Сайту, а також поширювати або демонструвати їх у будь-якому вигляді або використовувати їх будь-яким іншим чином для суспільних чи комерційних цілей. Будь-яке використання цих матеріалів на інших сайтах або в комп'ютерних мережах заборонено."
            />
            <TextBlock
                title="Відмова від відповідальності"
                text="Матеріали та послуги цього сайту надаються без жодних гарантій. Сайт не гарантує точності та повноти матеріалів, програм і послуг, що надаються на цьому Сайті. Сайт в будь-який час без повідомлення може вносити зміни в матеріали та послуги, що надаються на цьому Сайті, а також у згадані в них продукти та ціни. У разі, якщо матеріали та послуги на цьому Сайті застаріють, то ми не зобов'язані оновлювати їх. Сайт за жодних обставин не несе відповідальності за будь-які збитки (включно з, але не обмежуючись збитком від втрати прибутку, даних або від переривання ділової активності), що виникли внаслідок використання, неможливості використання або результатів використання цього сайту."
            />
            <TextBlock
                title="Дотримання вимог"
                text="Наша компанія дотримується прийнятих в Україні принципів конфіденційності щодо повідомлення, вибору, передачі, безпеки, цілісності даних та доступу до них. Ми регулярно перевіряємо дотримання цієї політики конфіденційності. Отримавши офіційну скаргу в письмовій формі, ми вважаємо своїм обов'язком зв'язатися з користувачем, який надіслав скаргу, з приводу його претензій і вирішити питання або усунути проблему в найкоротші терміни."
            />
            <TextBlock
                title="Зміна політики конфіденційності"
                text="Іноді наша політика конфіденційності може змінюватися. Однак ми не маємо наміру і не обмежуватимемо права користувачів без їх явно вираженої згоди. Усі оновлення політики конфіденційності відображаються на цій сторінці."
            />
        </div>
    );
};

export default TermsOfUse;
