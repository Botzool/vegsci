import React from "react";
import { MailEmoji } from "../../components/atoms/Emoji";

export const en = {
  menu: [
    { name: "installation", text: "Instalace" },
    { name: "actualization", text: "Aktualizace" },
    { name: "workPrincipals", text: "Zásady práce" },
    { name: "coordinators", text: "Koordinátoři" }
  ],
  intro: (
    <p>
      Program TURBOVEG (
      <a target="_blanc" href="http://onlinelibrary.wiley.com/doi/10.2307/3237010/pdf">
        Hennekens & Schaminée 2001
      </a>
      ) je základním softwarem také pro Českou národní fytocenologickou databázi. V České republice
      může tento software zdarma získat každý amatérský i profesionální botanik, ekolog, student
      nebo pracovník ochrany přírody zabývající se studiem vegetace, pokud souhlasí s dodržováním
      níže stanovených podmínek pro práci s databází a je ochoten účastnit se výměny elektronických
      dat uložených v databázi. Pro získání přístupových práv kontaktujte Ilonu Knollovou (
      <MailEmoji mail="ikuzel@sci.muni.cz" />) nebo Milana Chytrého (
      <MailEmoji mail="chytry@sci.muni.cz" />
      ). Pro zpracování fytocenologických dat uložených v programu TURBOVEG doporučujeme používat
      program JUICE (
      <a
        target="_blanc"
        href="http://onlinelibrary.wiley.com/doi/10.1111/j.1654-1103.2002.tb02069.x/abstract"
      >
        Tichý 2002
      </a>
      ), který lze zdarma{" "}
      <a target="_blanc" href="http://www.sci.muni.cz/botany/juice.htm">
        stáhnout zde
      </a>
      .
    </p>
  ),
  installation: (
    <div style={{ fontWeight: "bold", color: "#94962C" }}>
      <a target="_blanc" href="http://www.sci.muni.cz/botany/tv/index.html">
        Instalace
      </a>
    </div>
  ),
  actualization: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Aktualizace</div>
      <div>
        Pro optimální funkci programu Turboveg doporučujeme pravidelně kontrolovat dostupné
        aktualizace programu (
        <a target="_blanc" href="https://www.synbiosys.alterra.nl/turboveg/">
          zde
        </a>
        , vždy stahovat vaiantu „International, single user version“).
      </div>
      <div>
        <p>
          <div>
            <u>Aktualizované verze společných databází:</u>
          </div>
          <div>
            Aktuální verze seznamu druhů:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/species.zip"
              download
            >
              species.zip
            </a>{" "}
            (19. 10. 2018)
            {/* TODO: – datum se doplňuje samo po aktualizaci souboru na server, bylo by dobré to zachovat */}
          </div>
          <div>
            Aktuální verze společných databází, tzv. popup lists:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/popup.zip"
              download
            >
              popup.zip
            </a>{" "}
            (17. 05. 2019)
            {/* TODO: – datum se doplňuje samo po aktualizaci souboru na server, bylo by dobré to zachovat */}
          </div>
        </p>

        <p>
          Soubor species.zip rozbalte a složku Czechia_Slovakia_2015 vložte do složky species
          (C:/Program Files/TURBOWIN/species). V Turbovegu připojte seznam druhů (species list)
          pomocí modify database attributes ke konkrétní databázi. Soubor popup.zip rozbalte a obsah
          vložte do složky popup (C:/Program Files/TURBOWIN/popup), při vkládání přepište všechny
          staré soubory.
        </p>
      </div>
    </div>
  ),
  workPrincipals: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Zásady práce</div>
      <p>
        Každý zadavatel smí zadávat fytocenologické snímky do databáze jen pod určitými čísly
        přidělenými lokálním koordinátorem. Tím získává jistotu, že pod stejnými čísly nezadává jiné
        snímky někdo jiný. V rámci stejného číselného rozsahu přiděleného lokálním koordinátorem se
        zadávají i citace literatury, pokud jsou zadávané snímky přebírány z publikovaných zdrojů.
      </p>
      <p>
        Autoři, kteří dosud nemají přidělen rozsah čísel, dostanou čísla přidělena při poskytnutí
        prvního souboru snímků do centrální databáze, tj. nejprve číslují své snímky od jedničky a
        pak celý soubor pošlou koordinátorovi centrální databáze, který snímkům přidělí volná čísla
        a přečísluje je. Pokud se zadavatel chystá své snímky publikovat, je kvůli odkazování vhodné
        mít již přidělená čísla z centrální databáze. Seznam rozsahů již přidělených čísel najdete{" "}
        <a target="_blanc" href="https://www.sci.muni.cz/botany/vegsci/dbase/rozsahy.pdf">
          zde
        </a>
        {/* TODO: (aktualizovat také). */}
      </p>
      <p>
        Pro začátečníky doporučujeme k prostudování{" "}
        <a target="_blanc" href="https://www.sci.muni.cz/botany/vegsci/dbase/manual_tv.pdf">
          manuál
        </a>{" "}
        popisující vytváření databází a zadávání dat do Turbovegu.
      </p>
      <p>
        Seznam druhů cévnatých rostlin používaný v TURBOVEGu je modifikovanou verzí díla Liste der
        Gefäßpflanzen Mitteleuropas (Ehrendorfer 1973) v němž lze najít také většinu synonym pro
        správný převod nomenklatury. Pokud přesto vzniknou pochybnosti při synonymizaci jmen rostlin
        uváděných v originálních zdrojích, je lépe nepsat daný druh do seznamu druhů ve snímku, ale
        do databázového pole Remarks, a to spolu s hodnotou pokryvnosti. Odtud bude po vyjasnění
        nomenklatorického problému možné kdykoliv v budoucnosti převést údaj do databáze. Tento
        seznam byl v roce 2015 aktualizován. Žádné nové druhy se oproti verzi z roku 2010
        nepřidávaly, pouze u některých došlo k úpravě jména. Obě verze jsou kompatibilní. Jména
        mechorostů a lišejníků jsou v databázi sjednocena podle standardní literatury (Frey et al.
        1995, Pišút et al. 1993). Druhový seznam používaný v České národní fytocenologické databázi,
        označovaný jako Czechia_Slovakia_2015, je shodný se seznamem používaným v Centrální databázi
        fytocenóz na Slovensku. Připomínky a návrhy k seznamu druhů prosím adresujte na
        ikuzel_at_sci.muni.cz. Seznam syntaxonů používaný v TURBOVEGu je vytvořen podle díla
        Rostlinná společenstva České republiky a jejich ohrožení (Moravec et al. 1995).
      </p>
    </div>
  ),
  coordinators: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Koordinátoři</div>
      <ul>
        <li>
          Centrální koordinace: Ilona Knollová a Milan Chytrý, e-mail:{" "}
          <MailEmoji mail="ikuzel@sci.muni.cz" />, <MailEmoji mail="chytry@sci.muni.cz" />
        </li>
        <li>
          Masarykova univerzita a jižní Morava: Ilona Knollová, e-mail:{" "}
          <MailEmoji mail="ikuzel@sci.muni.cz" />
        </li>
        <li>
          Česká zemědělská univerzita, Botanický ústav Průhonice a Univerzita Karlova: Tomáš Černý,
          e-mail: <MailEmoji mail="cernyt@fld.czu.cz" />
        </li>
        <li>
          Jihočeská univerzita a jižní Čechy: Milan Štech, e-mail:{" "}
          <MailEmoji mail="stech@prf.jcu.cz" />
        </li>
      </ul>
    </div>
  )
};