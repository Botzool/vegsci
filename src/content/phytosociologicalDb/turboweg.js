import React from "react";
import { MailEmoji } from "../../components/atoms/Emoji";
import { graphql, StaticQuery, withPrefix } from "gatsby";

const DbDate = ({ type }) => (
  <StaticQuery
    query={graphql`
      query {
        dbData {
          dbData
        }
      }
    `}
    render={data => {
      if (!data && !data.dbData) return <span></span>;
      const dates = JSON.parse(data.dbData.dbData);
      return <span>({type === "speciesDate" ? dates.speciesDate : dates.dbaseDate})</span>;
    }}
  />
);

export const en = {
  menu: [
    /* { name: "installation", text: "Instalation" },*/
    { name: "actualization", text: "Installation and update" },
    { name: "workPrincipals", text: "Instructions" },
    { name: "coordinators", text: "Coordinators" }
  ],
  intro: ( 
  <div>
	<h3>Turboveg for Windows</h3>
    <p>
      The data are stored in the TURBOVEG 2 database management program developed by Stephan Hennekens (<a target="_blanc" href="http://onlinelibrary.wiley.com/doi/10.2307/3237010/pdf">Hennekens & Schaminée 2001</a>), which is a European standard software for vegetation-plot databases. 
    </p>
	</div>
  ),
  /* installation: (
   <div>
   <div style={{ fontWeight: "bold", color: "#94962C" }}>Instalace</div>
      <p>
        Pro instalaci programu klikněte <a href="http://www.sci.muni.cz/botany/tv/index.html">ZDE</a>.
      </p>
    </div>
  ),*/
  actualization: (
    <div>
   <div style={{ fontWeight: "bold", color: "#94962C" }}>Installation</div>
      <p>
        If you are interested in the Czech version of Turboveg, contact Ilona Knollová (
      <MailEmoji mail="ikuzel@sci.muni.cz" />) or Milan Chytrý (
      <MailEmoji mail="chytry@sci.muni.cz" />). International users have to contact coordinators in their countries or directly Stephan Hennnekens.
      </p>
         <div style={{ fontWeight: "bold", color: "#94962C" }}>Updates</div>
      <div>
        We recommend to check out for updates of Turboveg (
        <a target="_blanc" href="https://www.synbiosys.alterra.nl/turboveg/">
          here
        </a>
        , select „International, single user version“).
      </div>
      <div>
        <p>
          <div>
            Updates of common databases (for Czech Turboveg only):
          </div>
          <div>
		  <li>
            Species list:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/species.zip"
              download
            >
              species.zip
            </a>{" "}
            <DbDate type="speciesDate" />
			</li>
			</div>
          <div>
		  <li>
            Popup list (database dictionary):{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/popup.zip"
              download
            >
              popup.zip
            </a>{" "}
            <DbDate />
			</li>
          </div>
        </p>

        <p>
        Extract the file <i>species.zip</i> and add the folder <i>Czechia_Slovakia_2015</i> to the folder /TURBOWIN/species. In the Turboveg program, assign the species list using <i>modify database attributes</i> to the specific database. Extract the file <i>popup.zip</i> to the folder /TURBOWIN/popup (old files should be rewritten).
        </p>
		<p>
		<div style={{ fontWeight: "bold", color: "#e6091f" }}>NEW</div>
		11.10.2022  New syntaxon list – The header data field „SYNTAXON“ newly follows syntaxon list according to monography <a href="https://botzool.cz/vegsci/vegetationCR">Vegetace České republiky</a> (Chytrý et al. 2007–2013). 
		Original syntaxon list (Moravec et al. 1995) is now located in the header data field „Syntaxon MORAVEC“. The change of structure requires downloading new popup list ({""}
        <a download href={withPrefix(`/Prevod_Moravec_VegetaceCR.pdf`)}> 
         details here
        </a>).
		</p>
      </div>
    </div>
  ),
  
  
  
  workPrincipals: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Instructions</div>
      <p>
        Each author may enter phytosociological relevés into the database only under specific numbers assigned by the regional coordinator. If the relevés are taken from published sources, bibliographic references entered should be from within the same numerical range. The list of assigned numbers is{" "}
        <a download href={withPrefix(`/rozsahy.pdf`)}> 
          here
        </a>.
        {/* TODO: (aktualizovat také). */}
      </p>
      <p>
        The collaborators who were not assigned to a range of relevé numbers should code their relevés from No. 1. Their relevés will be renumbered by the coordinator once they are sent to the central database.
      </p>
      <p>
        Turboveg manual for beginners (in Czech) is{" "}
        <a download href={withPrefix(`/manualTv.pdf`)}>
          here
        </a>.
		{" "} You can download empty database {" "}
        <a download href={withPrefix(`/vzor.zip`)}>
          here
        </a>{" "}  with defined standard header data fields used in the Czech National Phytosociological Database. Restore the empty database to the folder /TURBOWIN/data and rename it.
      </p>
      <p>
        Nomenclature of vascular plant species in the Czech National Phytosociological Database follows an updated version of Liste der Gefäßpflanzen Mitteleuropas (Ehrendorfer 1973), prepared by Harald Niklfeld and Walter Gutermann, with additions of species included in Key to the flora of the Czech Republic (Kubát et al. 2002). Names of bryophytes and lichens follow Frey et al. (1995) and Pišút et al. (1993). The species list used in the Czech National Phytosociological Database, called Czechia_Slovakia_2015, is identical with that used in the Central Database of Phytosociological Relevés in Slovakia. The list of syntaxa used in the Czech installation of TURBOVEG follows Moravec et al. (1995).
      </p>
      <p>
        References: <br />
        <cite>
		<li>
			Chytrý M. (ed.) (2007): Vegetace České republiky 1. Travinná a keříčková vegetace. Vegetation of the Czech Republic 1. Grassland and heathland vegetation. Academia, Praha. 
		</li>
		<li>
			Chytrý M. (ed.) (2009): Vegetace České republiky 2. Ruderální, plevelová, skalní a suťová vegetace. Vegetation of the Czech Republic 2. Ruderal, weed, rock and scree vegetation. Academia, Praha. 
		</li>
		<li>
			Chytrý M. (ed.) (2011): Vegetace České republiky 3. Vodní a mokřadní vegetace. Vegetation of the Czech Republic 3. Aquatic and wetland vegetation. Academia, Praha. 
		</li>
		<li>
			Chytrý M. (ed.) (2013): Vegetace České republiky 4. Lesní a křovinná vegetace. Vegetation of the Czech Republic 4. Forest and scrub vegetation. Academia, Praha.
		</li>
          <li>
            Ehrendorfer F. (ed.) (1973): Liste der Gefäßpflanzen Mitteleuropas. Ed. 2. G. Fischer,
            Stuttgart.{" "}
          </li>
          <li>
            Frey W., Frahm J. P., Fischer E. & Lobin W. (1995): Die Moos- und Farnpflanzen Europas.
            G. Fischer, Stuttgart.
          </li>
          <li>
            Hennekens S.M. & Schaminée J.H.J. (2001): TURBOVEG, a comprehensive data base management
            system for vegetation data. Journal of Vegetation Science, 12: 589–591.{" "}
            <a target="_blanc" href="http://onlinelibrary.wiley.com/doi/10.2307/3237010/pdf">
              [pdf]
            </a>
			</li>
          <li>
		  Kubát K., Hrouda L., Chrtek J. jun., Kaplan Z., Kirschner J. & Štěpánek J. (eds.) (2002): Klíč ke květeně České Republiky. Academia, Praha.
          </li>
          <li>
            Moravec J., Balátová-Tuláčková E., Blažková D., Hadač E., Hejný S., Husák Š., Jeník J.,
            Kolbek J., Krahulec F., Kropáč Z., Neuhäusl R., Rybníček K., Řehořek V. & Vicherek J.
            (1995): Rostlinná společenstva České republiky a jejich ohrožení (Red list of plant
            communities of the Czech Republic and their endangerment). Ed. 2. Severočes. Přír.,
            Suppl. 1995: 1–206.
          </li>
          <li>
            Pišút I., Lackovicová A. & Lisická E. (1993): Súpis lišajníkov Slovenska. Biológia, 48,
            Suppl. 1: 53–98.
          </li>
          </cite>
      </p>
    </div>
  ),
  coordinators: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Coordinators</div>
      <ul>
        <li>
          Central coordinators: Ilona Knollová (<MailEmoji mail="ikuzel@sci.muni.cz" />) and Milan Chytrý (<MailEmoji mail="chytry@sci.muni.cz" />)
        </li>
        <li>
          Masaryk University and South Moravia: Ilona Knollová (<MailEmoji mail="ikuzel@sci.muni.cz" />)
        </li>
        <li>
          Czech University of Life Sciences Prague, Institute of Botany
of the Czech Academy of Sciences and Charles University in Prague: Tomáš Černý (<MailEmoji mail="cernyt@fld.czu.cz" />)
        </li>
        <li>
          University of South Bohemia and South Bohemia: Milan Štech (<MailEmoji mail="stech@prf.jcu.cz" />)
        </li>
      </ul>
    </div>
  )
  };

export const cz = {
  menu: [
    /* { name: "installation", text: "Instalace" },*/
    { name: "actualization", text: "Instalace a aktualizace" },
    { name: "workPrincipals", text: "Zásady práce" },
    { name: "coordinators", text: "Koordinátoři" }
  ],
  intro: (
  <div>
    <h3>Turboveg for Windows</h3>

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
      ), který lze zdarma stáhnout{" "}
      <a target="_blanc" href="http://www.sci.muni.cz/botany/juice.htm">
        zde
      </a>
      .
    </p>
		</div>
  ),
  /* installation: (
   <div>
   <div style={{ fontWeight: "bold", color: "#94962C" }}>Instalace</div>
      <p>
        Pro instalaci programu klikněte <a href="http://www.sci.muni.cz/botany/tv/index.html">ZDE</a>.
      </p>
    </div>
  ),*/
  actualization: (
    <div>
   <div style={{ fontWeight: "bold", color: "#94962C" }}>Instalace</div>
      <p>
        Pro instalaci programu klikněte <a href="http://www.sci.muni.cz/botany/tv/index.html">ZDE</a>.
      </p>
         <div style={{ fontWeight: "bold", color: "#94962C" }}>Aktualizace</div>
      <div>
        Pro optimální funkci programu TURBOVEG doporučujeme pravidelně kontrolovat dostupné
        aktualizace programu (
        <a target="_blanc" href="https://www.synbiosys.alterra.nl/turboveg/">
          zde
        </a>
        , vždy stahovat variantu „International, single user version“).
      </div>
      <div>
        <p>
          <div>
            Aktualizované verze společných databází:
          </div>
          <div>
            <li>Seznam druhů:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/species.zip"
              download
            >
              species.zip
            </a>{" "}
            <DbDate type="speciesDate" />
			</li>
          </div>
          <div>
		  <li>
            Společné databáze, tzv. popup lists:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/popup.zip"
              download
            >
              popup.zip
            </a>{" "}
            <DbDate />
			</li>
          </div>
        </p>

        <p>
          Soubor <i>species.zip</i> rozbalte a složku <i>Czechia_Slovakia_2015</i> vložte do složky <i>species</i> {" "} (C:/Program Files/TURBOWIN/species). V Turbovegu připojte seznam druhů (species list)
          pomocí <i>modify database attributes</i> ke konkrétní databázi. Soubor <i>popup.zip</i> rozbalte a obsah
          vložte do složky <i>popup</i> (C:/Program Files/TURBOWIN/popup), při vkládání přepište všechny
          staré soubory.
        </p>
		
		<p>
		<div style={{ fontWeight: "bold", color: "#e6091f" }}>NOVÉ</div>
		11.10.2022  Nový syntaxon list – pole „SYNTAXON“ nově obsahuje seznam syntaxonů podle monografie <a href="https://botzool.cz/vegsci/vegetationCR">Vegetace České republiky</a> (Chytrý et al. 2007–2013). 
		Původní syntaxon list (Moravec et al. 1995) je přesunutý do pole „Syntaxon MORAVEC“. Změna vyžaduje aktualizaci popup listu a změna struktury již existující databáze není automatická ({""}
        <a download href={withPrefix(`/Prevod_Moravec_VegetaceCR.pdf`)}> 
         podrobný popis zde
        </a>).
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
        zadávají i citace literatury, pokud jsou zadávané snímky přebírány z publikovaných zdrojů. Seznam rozsahů již přidělených čísel najdete{" "}
        <a download href={withPrefix(`/rozsahy.pdf`)}>
          zde
        </a>
        {/* TODO: (aktualizovat také). */}
      </p>
      <p>
        Autoři, kteří dosud nemají přidělen rozsah čísel, dostanou čísla přidělena při poskytnutí
        prvního souboru snímků do centrální databáze, tj. nejprve číslují své snímky od jedničky a
        pak celý soubor pošlou koordinátorovi centrální databáze, který snímkům přidělí volná čísla
        a přečísluje je. Pokud se zadavatel chystá své snímky publikovat, je kvůli odkazování vhodné
        mít již přidělená čísla z centrální databáze. 
      </p>
      <p>
        Pro začátečníky doporučujeme k prostudování{" "}
        <a download href={withPrefix(`/manualTv.pdf`)}>
          manuál
        </a>{" "}
        popisující vytváření databází a zadávání dat do Turbovegu. {" "}
        <a download href={withPrefix(`/vzor.zip`)}>
          Zde
        </a>{" "} si můžete stáhnout prázdnou vzorovou databázi s předem definovanými standardními hlavičkami používanými v ČNFD. Prázdnou databázi si rozbalíte do složky TUBOWIN/data a přejmenujete.
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
        fytocenóz na Slovensku. Připomínky a návrhy k seznamu druhů prosím adresujte na Ilonu
        Knollovou (
        <MailEmoji mail="ikuzel@sci.muni.cz" />
        ). Seznam syntaxonů používaný v TURBOVEGu je vytvořen podle díla Rostlinná společenstva
        České republiky a jejich ohrožení (Moravec et al. 1995).
      </p>
	  
      <p>
        Literatura: <br />
        <cite>
		<li>
			Chytrý M. (ed.) (2007): Vegetace České republiky 1. Travinná a keříčková vegetace. Vegetation of the Czech Republic 1. Grassland and heathland vegetation. Academia, Praha. 
		</li>
		<li>
			Chytrý M. (ed.) (2009): Vegetace České republiky 2. Ruderální, plevelová, skalní a suťová vegetace. Vegetation of the Czech Republic 2. Ruderal, weed, rock and scree vegetation. Academia, Praha. 
		</li>
		<li>
			Chytrý M. (ed.) (2011): Vegetace České republiky 3. Vodní a mokřadní vegetace. Vegetation of the Czech Republic 3. Aquatic and wetland vegetation. Academia, Praha. 
		</li>
		<li>
			Chytrý M. (ed.) (2013): Vegetace České republiky 4. Lesní a křovinná vegetace. Vegetation of the Czech Republic 4. Forest and scrub vegetation. Academia, Praha.
		</li>
          <li>
            Ehrendorfer F. (ed.) (1973): Liste der Gefäßpflanzen Mitteleuropas. Ed. 2. G. Fischer,
            Stuttgart.{" "}
          </li>
          <li>
            Frey W., Frahm J. P., Fischer E. & Lobin W. (1995): Die Moos- und Farnpflanzen Europas.
            G. Fischer, Stuttgart.
          </li>
          <li>
            Hennekens S.M. & Schaminée J.H.J. (2001): TURBOVEG, a comprehensive data base management
            system for vegetation data. Journal of Vegetation Science, 12: 589–591.{" "}
            <a target="_blanc" href="http://onlinelibrary.wiley.com/doi/10.2307/3237010/pdf">
              [pdf]
            </a>
          </li>
          <li>
            Moravec J., Balátová-Tuláčková E., Blažková D., Hadač E., Hejný S., Husák Š., Jeník J.,
            Kolbek J., Krahulec F., Kropáč Z., Neuhäusl R., Rybníček K., Řehořek V. & Vicherek J.
            (1995): Rostlinná společenstva České republiky a jejich ohrožení (Red list of plant
            communities of the Czech Republic and their endangerment). Ed. 2. Severočes. Přír.,
            Suppl. 1995: 1–206.
          </li>
          <li>
            Pišút I., Lackovicová A. & Lisická E. (1993): Súpis lišajníkov Slovenska. Biológia, 48,
            Suppl. 1: 53–98.
          </li>
        </cite>
      </p>
    </div>
  ),
  coordinators: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Koordinátoři</div>
      <ul>
        <li>
          Centrální koordinace: Ilona Knollová (<MailEmoji mail="ikuzel@sci.muni.cz" />) a Milan Chytrý (<MailEmoji mail="chytry@sci.muni.cz" />)
		  </li>
        <li>
          Masarykova univerzita a jižní Morava: Ilona Knollová (<MailEmoji mail="ikuzel@sci.muni.cz" />)
        </li>
        <li>
          Česká zemědělská univerzita, Botanický ústav Průhonice a Univerzita Karlova: Tomáš Černý (<MailEmoji mail="cernyt@fld.czu.cz" />)
        </li>
        <li>
          Jihočeská univerzita a jižní Čechy: Milan Štech (<MailEmoji mail="stech@prf.jcu.cz" />)
        </li>
      </ul>
    </div>
  )
};

