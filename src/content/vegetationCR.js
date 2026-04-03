import React from "react";
import vegetace1 from "../../static/images/vegetation/vegetace1.jpg";
import vegetace2 from "../../static/images/vegetation/vegetace2.jpg";
import vegetace3 from "../../static/images/vegetation/vegetace3.jpg";
import vegetace4 from "../../static/images/vegetation/vegetace4.jpg";
import { withPrefix} from "gatsby";

export const en = {
  title: "Vegetation of the Czech Republic",
  introduction: (
    <div>
      <p>
        Vegetation of the Czech Republic is a four-volume monograph which systematically summarizes
        the diversity of vegetation types on the territory of the Czech Republic. Czech vegetation
        is divided into 39 phytosociological classes, which are further divided into 138 alliances
        and 496 associations. Each of these vegetation units is characterized by a detailed
        description of its floristic composition, ecology, dynamics, distribution and economic or
        conservation value, including distribution maps and synoptic tables of species composition.
        Associations were delimited by formal definitions and tested using a set of approximately
        100,000 vegetation plots contained in the Czech Vegetation Database.
        National vegetation classification is accompanied by a computer <a href="http://doi.org/10.5281/zenodo.3605561">expert system</a> for
        identification of associations. The monograph was elaborated by a team of botanists from the
        Department of Botany and Zoology, Masaryk University in cooperation with experts from the
        Institute of Botany, Academy of Sciences of the Czech Republic, and other institutions. The
        project was funded by the Czech Science Foundation (grants 206/02/0957, 206/05/0200,
        206/06/0659 and 206/09/0329) and Ministry of Education, Youth and Sports of the Czech
        Republic (long-term research plan MSM0021622416). The project received an Award of the
        Chairman of the Czech Science Foundation in 2012. The content of descriptions of vegetation
        units from the printed version of Vegetation of the Czech Republic was also made available
        in the <a href="https://pladias.cz/en/vegetation/">Pladias database</a>.
      </p>

      <p>
        <b>Editor:</b> Milan Chytrý
      </p>

      <p>
        <b>Authors:</b> Petr Bauer, Denisa Blažková, Karel Boublík, Tomáš Černý, Martina
        Čtvrtlíková, Jan Douda, Libor Ekrt, Ester Ekrtová, Michal Hájek, Petra Hájková, Petra
        Hanáková, Handrij Härtel, Radim Hédl, Aleš Hoffmann, Richard Hrivnák, Zdenka Hroudová, Milan
        Chytrý, Martin Kočí, Jiří Kolbek, František Krahulec, Tomáš Kučera, Deana Láníková
        (Simonová), Zdeňka Lososová, Jana Navrátilová, Zdenka Neuhäuslová, Jan Novák, Zdenka
        Otýpková, Helena Oťaheľová, Petr Petřík, Jan Roleček, Jaroslav Rydlo, Marcela Řezníčková,
        Jiří Sádlo, Kateřina Šumberová, Michaela Vítková and David Zelený
      </p>

      <p>
        <b>Technical support:</b> Jiří Danihelka, Ondřej Hájek, Katrin Karimová, Ilona Knollová,
        Štěpánka Králová, Klára Komprdová (Kubošová), Dana Holubová (Michalcová), Jiří Rozehnal,
        Lubomír Tichý, Václav Zouhar and Kristýna Žáková
      </p>
    </div>
  ),
  books: [
    {
      title: "Volume 1 – Grassland and Heathland Vegetation",
      year: "2007, second edition 2010",
      link:
        "Chytrý M. (ed.) (2007): Vegetace České republiky 1. Travinná a keříčková vegetace / Vegetation of the Czech Republic 1. Grassland and Heathland Vegetation. Academia, Praha, 525 pp.",
      authors:
        "Authors: M. Chytrý, M. Kočí, K. Šumberová, J. Sádlo, F. Krahulec, P. Hájková, M. Hájek, A. Hoffmann, D. Blažková, T. Kučera, J. Novák, M. Řezníčková, T. Černý, H. Härtel & D. Simonová",
      technical:
        "Technical support: L. Tichý, I. Knollová, Z. Otýpková, J. Danihelka, O. Hájek, K. Komprdová (Kubošová), K. Karimová and J. Rozehnal",
      pdfLowRes: "PDF coarse resolution (1st edition 2007)",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-low-resolution.pdf",
      pdfHighRes: "PDF fine resolution (2nd edition 2010)",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-2nd-edition-2010-high-resolution.pdf",
      img: vegetace1,
      review: (
        <div>
          <b>Reviews of Volume 1:</b>
          <li>
            Iva Apostolova in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Apostolova2008_Phytol-Balc.pdf`)}>
              Phytologia Balcanica
            </a>{" "}
            14: 149 (2008){" "}
          </li>
          <li>
            Adolf Češka in{" "}
            <a href="http://www.ou.edu/cas/botany-micro/ben/ben394.html">
              Botanical Electronic News
            </a>{" "}
            394 (2008){" "}
          </li>
          <li>
            Jürgen Dengler in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Dengler2007_Kieler-Not-Pflanzenk.pdf`)}>
              Kieler Notizen zur Pflanzenkunde
            </a>{" "}
            35: 121–122 (2007){" "}
          </li>
          <li>
            Hartmut Dierschke in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Dierschke2008_Tuexenia.pdf`)}>
              Tuexenia
            </a>{" "}
            28: 279–293 (2008){" "}
          </li>
          <li>
            Valentin B. Golub & L. F. Nikolaychuk in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Golub2009_Rast-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            12: 152–155 (2008){" "}
          </li>
          <li>
            Radim Hédl in{" "}
			<a download href={withPrefix(`/Book-review_Vegetace-CR-1_Hedl2007_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2007(6): LXXXVIII (2007){" "}
          </li>
          <li>
            Barbara Juskiewicz-Swaczyna in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Juskiewicz2009_Bull-EDGG.pdf`)}>
              Bulletin of the European Dry Grassland Group
            </a>{" "}
            3: 28 (2009)
          </li>
          <li>
            Anna A. Kuzemko in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Kuzemko2009_Ukr-Bot-J.pdf`)}>
              Ukrainskii Botanichnii Zhurnal
            </a>{" "}
            66: 307–314 (2009){" "}
          </li>
          <li>
            Detlef Mahn in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1-2-3_Mahn2012_Bot-Natursch-Hessen.pdf`)}>
              Botanik und Naturschutz in Hessen
            </a>{" "}
            24: 135–143 (2012){" "}
          </li>
          <li>
            Milan Valachovič in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Valachovic2007_Zpr-CBS.pdf`)}>
              Zprávy České botanické společnosti
            </a>{" "}
            42: 358–360 (2007){" "}
          </li>
          <li>
            Wofgang Willner in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Willner2008_Neilreichia.pdf`)}>
              Neilreichia
            </a>{" "}
            5: 339–341 (2008){" "}
          </li>
        </div>
      )
    },
    {
      title: "Volume 2 – Ruderal, Weed, Rock and Scree Vegetation",
      year: "2009",
      link:
        "Chytrý M. (ed.) (2009): Vegetace České republiky 2. Ruderální, plevelová, skalní a suťová vegetace / Vegetation of the Czech Republic 2. Ruderal, Weed, Rock and Scree vegetation. Academia, Praha, 520 pp.",
      authors:
        "Authors: D. Láníková, Z. Lososová, J. Sádlo, M. Chytrý, Z. Otýpková, M. Kočí, P. Petřík, K. Šumberová, Z. Neuhäuslová, P. Hájková and M. Hájek",
      technical:
        "Technical support: Š. Králová, K. Karimová, J. Danihelka, L. Tichý, D. Holubová (Michalcová), O. Hájek and K. Komprdová (Kubošová)",
      pdfLowRes: "PDF coarse resolution",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-low-resolution.pdf",
      pdfHighRes: "PDF fine resolution",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-high-resolution.pdf",
      img: vegetace2,
      review: (
        <div>
          <b>Reviews of Volume 2:</b>
          <li>
            Iva Apostolova in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Apostolova2010_Phytol-Balc.pdf`)}>
              Phytologia Balcanica
            </a>{" "}
            16: 169–170 (2010)
          </li>
          <li>
            Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Golub2010_Rast-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            16:73–76 (2010)
          </li>
          <li>
            Jürgen Dengler in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2-3_Dengler2011_Bull-EDGG.pdf`)}>
              Bulletin of the European Dry Grassland Group
            </a>{" "}
            13: 28–29 (2011){" "}
          </li>
          <li>
            Radim Hédl in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Hedl2010_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2007(4): LIX-LX (2010){" "}
          </li>
          <li>
            Richard Hrivnák in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Hrivnak2010_Bull-SBS.pdf`)}>
              Bulletin Slovenskej botanickej spoločnosti
            </a>{" "}
            32: 136, 146 (2010)
          </li>
          <li>
            Ján Kliment & Ivan Jarolímek in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Kliment-Jarolimek2012_Folia-Geobot.pdf`)}>
              Folia Geobotanica
            </a>{" "}
            47: 105–115 (2012){" "}
          </li>
          <li>
            Detlef Mahn in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1-2-3_Mahn2012_Bot-Natursch-Hessen.pdf`)}>
              Botanik und Naturschutz in Hessen
            </a>{" "}
            24: 135–143 (2012){" "}
          </li>
          <li>
            Milan Valachovič in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Valachovic2010_Zpr-CBS.pdf`)}>
              Zprávy České botanické společnosti
            </a>{" "}
            45: 133-134 (2010){" "}
          </li>
        </div>
      )
    },
    {
      title: "Volume 3 – Aquatic and wetland vegetation",
      year: "2011",
      link:
        "Chytrý M. (ed.) (2011): Vegetace České republiky 3. Vodní a mokřadní vegetace / Vegetation of the Czech Republic 3. Aquatic and Wetland Vegetation. Academia, Praha, 827 pp.",
      authors:
        "Authors: K. Šumberová, P. Hájková, M. Hájek, M. Chytrý, Z. Hroudová, J. Navrátilová, M. Čtvrtlíková, J. Sádlo, Z. Lososová, R. Hrivnák, J. Rydlo, H. Oťaheľová, P. Bauer, P. Hanáková, L. Ekrt and E. Ekrtová",
      technical:
        "Technical support: D. Holubová (Michalcová), K. Žáková, J. Danihelka, Š. Králová, K. Karimová, L. Tichý, O. Hájek and M. Kočí",
      pdfLowRes: "PDF coarse resolution",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-low-resolution.pdf",
      pdfHighRes: "PDF fine resolution",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-high-resolution.pdf",
      img: vegetace3,
      review: (
        <div>
          <b>Reviews of Volume 3:</b>
          <li>
            Anonymous in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Anonymus2012_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2012: 24 (2012){" "}
          </li>
          <li>
            János Csiky in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Csiky2013_Kitaibelia.pdf`)}>
              Kitaibelia
            </a>{" "}
            18: 187–196 (2013){" "}
          </li>
          <li>
            Adolf Češka in{" "}
            <a href="http://www.ou.edu/cas/botany-micro/ben/ben449.html">
              Botanical Electronic News
            </a>{" "}
            449 (2012){" "}
          </li>
          <li>
            Hartmut Dierschke in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Dierschke2012_Tuexenia.pdf`)}>
              Tuexenia
            </a>{" "}
            32: 372 (2012){" "}
          </li>
          <li>
            Jürgen Dengler in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2-3_Dengler2011_Bull-EDGG.pdf`)}>
              Bulletin of the European Dry Grassland Group
            </a>{" "}
            13: 28–29 (2011){" "}
          </li>
          <li>
            Daniel Dítě in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Dite2012_Bryonora.pdf`)}>
              Bryonora
            </a>{" "}
            48: 68–70 (2012){" "}
          </li>
          <li>
            Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Golub2012_Rast-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            20: 139–142 (2012)
          </li>
          <li>
            Ján Kliment in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Kliment2011_Zpr-CBS.pdf`)}>
              Zprávy České botanické společnosti
            </a>{" "}
            46: 394–396 (2011){" "}
          </li>
          <li>
            Detlef Mahn in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1-2-3_Mahn2012_Bot-Natursch-Hessen.pdf`)}>
              Botanik und Naturschutz in Hessen
            </a>{" "}
            24: 135–143 (2012){" "}
          </li>
          <li>
            Jan Pergl in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Pergl2014_Folia-Geobot_DOI.pdf`)}>
              Folia Geobotanica
            </a>{" "}
            49 (2014){" "}
          </li>
          <li>
            Joop Schaminée in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Schaminee2012_Preslia.pdf`)}>
              Preslia
            </a>{" "}
            84: 325–326 (2012){" "}
          </li>
          <li>
            Jozef Šibík in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Sibik2012_Bull-SBS.pdf`)}>
              Bulletin Slovenskej botanickej spoločnosti{" "}
            </a>{" "}
            34: 124–126 (2012){" "}
          </li>
          <li>
            Rossen Tzonev in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Tzonev2012_Phytol-Balc.pdf`)}>
              Phytologia Balcanica
            </a>{" "}
            17: 385–386 (2011){" "}
          </li>
        </div>
      )
    },
    {
      title: "Volume 4 – Forest and shrub vegetation",
      year: "2013",
      link:
        "Chytrý M. (ed.) (2013): Vegetace České republiky 4. Lesní a křovinná vegetace / Vegetation of the Czech Republic 4. Forest and Scrub Vegetation. Academia, Praha, 552 pp.",
      authors:
        "Authors: M. Chytrý, J. Douda, J. Roleček, J. Sádlo, K. Boublík, R. Hédl, M. Vítková, D. Zelený, J. Navrátilová, Z. Neuhäuslová, P. Petřík, J. Kolbek, Z. Lososová, K. Šumberová and R. Hrivnák",
      technical:
        "Technical support: D. Holubová (Michalcová), K. Žáková, J. Danihelka, L. Tichý, V. Zouhar, O. Hájek and M. Kočí",
      pdfLowRes: "PDF coarse resolution",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-low-resolution.pdf",
      pdfHighRes: "PDF fine resolution",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-high-resolution.pdf",
      img: vegetace4,
      review: (
        <div>
          <b>Reviews of Volume 4:</b>
          <li>
            Hartmut Dierschke in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-4_Dierschke2014_Tuexenia.pdf`)}>
              Tuexenia
            </a>{" "}
            34: 491–499 (2014){" "}
          </li>
          <li>
            Valentin B. Golub in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-4_Golub2014_Rost-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            24: 154–160 (2014)
          </li>
          <li>
            Jaroslav Vojta in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-4_Vojta2015_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2015: XV (2015)
          </li>
        </div>
      )
    }
  ]
};

export const cz = {
  title: "Vegetace České republiky",
  introduction: (
    <div>
      <p>
        Vegetace České republiky je čtyřdílná monografie, která systematicky shrnuje diverzitu
        vegetačních typů na území České republiky. Česká vegetace je členěna do 39 fytocenologických
        tříd, které se dále dělí na 138 svazů a 496 asociací. Pro každou z těchto vegetačních
        jednotek je uveden podrobný popis struktury a druhového složení, ekologie, dynamiky,
        rozšíření a významu včetně map rozšíření a srovnávacích tabulek druhového složení. Asociace
        byly přesně vymezeny pomocí formálních definic a testovány na souboru asi 100 000
        fytocenologických snímků obsažených v České národní fytocenologické databázi. Klasifikaci
        vegetace doprovází počítačový <a href="http://doi.org/10.5281/zenodo.3605561">expertní systém</a> pro určování asociací. Monografii zpracoval
        tým botaniků z Ústavu botaniky a zoologie Přírodovědecké fakulty Masarykovy univerzity ve
        spolupráci s odborníky z Botanického ústavu AV ČR a dalších institucí. Projekt byl
        financován Grantovou agenturou České republiky (projekty 206/02/0957, 206/05/0200,
        206/06/0659 a 206/09/0329) a Ministerstvem školství, mládeže a tělovýchovy (výzkumný záměr
        MŠM0021622416). Projektu byla udělena Cena předsedy Grantové agentury ČR za rok 2012. Obsah
        popisů vegetačních jednotek z tištěné verze Vegetace České republiky byl zpřístupněn také v
        databázi <a href="https://pladias.cz/vegetation/">Pladias</a>.
      </p>
      <p>
        <b>Editor:</b> Milan Chytrý
      </p>
      <p>
        <b>Autoři textů:</b> Petr Bauer, Denisa Blažková, Karel Boublík, Tomáš Černý, Martina
        Čtvrtlíková, Jan Douda, Libor Ekrt, Ester Ekrtová, Michal Hájek, Petra Hájková, Petra
        Hanáková, Handrij Härtel, Radim Hédl, Aleš Hoffmann, Richard Hrivnák, Zdenka Hroudová, Milan
        Chytrý, Martin Kočí, Jiří Kolbek, František Krahulec, Tomáš Kučera, Deana Láníková
        (Simonová), Zdeňka Lososová, Jana Navrátilová, Zdenka Neuhäuslová, Jan Novák, Zdenka
        Otýpková, Helena Oťaheľová, Petr Petřík, Jan Roleček, Jaroslav Rydlo, Marcela Řezníčková,
        Jiří Sádlo, Kateřina Šumberová, Michaela Vítková a David Zelený
      </p>
      <p>
        <b>Technická spolupráce:</b> Jiří Danihelka, Ondřej Hájek, Katrin Karimová, Ilona Knollová,
        Štěpánka Králová, Klára Komprdová (Kubošová), Dana Holubová (Michalcová), Jiří Rozehnal,
        Lubomír Tichý, Václav Zouhar a Kristýna Žáková
      </p>
    </div>
  ),
  books: [
    {
      title: "1. díl – Travinná a keříčková vegetace",
      year: "2007, druhé vydání 2010",
      link:
        "Chytrý M. (ed.) (2007): Vegetace České republiky 1. Travinná a keříčková vegetace / Vegetation of the Czech Republic 1. Grassland and Heathland Vegetation. Academia, Praha, 525 pp.",
      authors:
        "Autoři textů: M. Chytrý, M. Kočí, K. Šumberová, J. Sádlo, F. Krahulec, P. Hájková, M. Hájek, A. Hoffmann, D. Blažková, T. Kučera, J. Novák, M. Řezníčková, T. Černý, H. Härtel a D. Simonová",
      technical:
        "Technická spolupráce: L. Tichý, I. Knollová, Z. Otýpková, J. Danihelka, O. Hájek, K. Komprdová (Kubošová), K. Karimová a J. Rozehnal",
      pdfLowRes: "PDF hrubé rozlišení (1. vydání 2007)",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení (2. vydání 2010)",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-1-2007-2nd-edition-2010-high-resolution.pdf",
      img: vegetace1,
      review: (
        <div>
          <b>Reviews of Volume 1:</b>
          <li>
            Iva Apostolova in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Apostolova2008_Phytol-Balc.pdf`)}>
              Phytologia Balcanica
            </a>{" "}
            14: 149 (2008){" "}
          </li>
          <li>
            Adolf Češka in{" "}
            <a href="http://www.ou.edu/cas/botany-micro/ben/ben394.html">
              Botanical Electronic News
            </a>{" "}
            394 (2008){" "}
          </li>
          <li>
            Jürgen Dengler in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Dengler2007_Kieler-Not-Pflanzenk.pdf`)}>
              Kieler Notizen zur Pflanzenkunde
            </a>{" "}
            35: 121–122 (2007){" "}
          </li>
          <li>
            Hartmut Dierschke in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Dierschke2008_Tuexenia.pdf`)}>
              Tuexenia
            </a>{" "}
            28: 279–293 (2008){" "}
          </li>
          <li>
            Valentin B. Golub & L. F. Nikolaychuk in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Golub2009_Rast-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            12: 152–155 (2008){" "}
          </li>
          <li>
            Radim Hédl in{" "}
			<a download href={withPrefix(`/Book-review_Vegetace-CR-1_Hedl2007_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2007(6): LXXXVIII (2007){" "}
          </li>
          <li>
            Barbara Juskiewicz-Swaczyna in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Juskiewicz2009_Bull-EDGG.pdf`)}>
              Bulletin of the European Dry Grassland Group
            </a>{" "}
            3: 28 (2009)
          </li>
          <li>
            Anna A. Kuzemko in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Kuzemko2009_Ukr-Bot-J.pdf`)}>
              Ukrainskii Botanichnii Zhurnal
            </a>{" "}
            66: 307–314 (2009){" "}
          </li>
          <li>
            Detlef Mahn in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1-2-3_Mahn2012_Bot-Natursch-Hessen.pdf`)}>
              Botanik und Naturschutz in Hessen
            </a>{" "}
            24: 135–143 (2012){" "}
          </li>
          <li>
            Milan Valachovič in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Valachovic2007_Zpr-CBS.pdf`)}>
              Zprávy České botanické společnosti
            </a>{" "}
            42: 358–360 (2007){" "}
          </li>
          <li>
            Wofgang Willner in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1_Willner2008_Neilreichia.pdf`)}>
              Neilreichia
            </a>{" "}
            5: 339–341 (2008){" "}
          </li>
        </div>
      )
    },
    {
      title: "2. díl – Ruderální, plevelová, skalní a suťová vegetace",
      year: "2009",
      link:
        "Chytrý M. (ed.) (2009): Vegetace České republiky 2. Ruderální, plevelová, skalní a suťová vegetace / Vegetation of the Czech Republic 2. Ruderal, Weed, Rock and Scree vegetation. Academia, Praha, 520 pp.",
      authors:
        "Autoři textů: D. Láníková, Z. Lososová, J. Sádlo, M. Chytrý, Z. Otýpková, M. Kočí, P. Petřík, K. Šumberová, Z. Neuhäuslová, P. Hájková a M. Hájek",
      technical:
        "Technická spolupráce: Š. Králová, K. Karimová, J. Danihelka, L. Tichý, D. Holubová (Michalcová), O. Hájek a K. Komprdová (Kubošová)",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-2-2009-high-resolution.pdf",
      img: vegetace2,
      review: (
        <div>
          <b>Reviews of Volume 2:</b>
          <li>
            Iva Apostolova in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Apostolova2010_Phytol-Balc.pdf`)}>
              Phytologia Balcanica
            </a>{" "}
            16: 169–170 (2010)
          </li>
          <li>
            Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Golub2010_Rast-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            16:73–76 (2010)
          </li>
          <li>
            Jürgen Dengler in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2-3_Dengler2011_Bull-EDGG.pdf`)}>
              Bulletin of the European Dry Grassland Group
            </a>{" "}
            13: 28–29 (2011){" "}
          </li>
          <li>
            Radim Hédl in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Hedl2010_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2007(4): LIX-LX (2010){" "}
          </li>
          <li>
            Richard Hrivnák in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Hrivnak2010_Bull-SBS.pdf`)}>
              Bulletin Slovenskej botanickej spoločnosti
            </a>{" "}
            32: 136, 146 (2010)
          </li>
          <li>
            Ján Kliment & Ivan Jarolímek in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Kliment-Jarolimek2012_Folia-Geobot.pdf`)}>
              Folia Geobotanica
            </a>{" "}
            47: 105–115 (2012){" "}
          </li>
          <li>
            Detlef Mahn in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1-2-3_Mahn2012_Bot-Natursch-Hessen.pdf`)}>
              Botanik und Naturschutz in Hessen
            </a>{" "}
            24: 135–143 (2012){" "}
          </li>
          <li>
            Milan Valachovič in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2_Valachovic2010_Zpr-CBS.pdf`)}>
              Zprávy České botanické společnosti
            </a>{" "}
            45: 133-134 (2010){" "}
          </li>
        </div>
      )
    },
    {
      title: "3. díl – Vodní a mokřadní vegetace",
      year: "2011",
      link:
        "Chytrý M. (ed.) (2011): Vegetace České republiky 3. Vodní a mokřadní vegetace / Vegetation of the Czech Republic 3. Aquatic and Wetland Vegetation. Academia, Praha, 827 pp.",
      authors:
        "Autoři textů: K. Šumberová, P. Hájková, M. Hájek, M. Chytrý, Z. Hroudová, J. Navrátilová, M. Čtvrtlíková, J. Sádlo, Z. Lososová, R. Hrivnák, J. Rydlo, H. Oťaheľová, P. Bauer, P. Hanáková, L. Ekrt a E. Ekrtová",
      technical:
        "Technická spolupráce: D. Holubová (Michalcová), K. Žáková, J. Danihelka, Š. Králová, K. Karimová, L. Tichý, O. Hájek a M. Kočí",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-3-2011-high-resolution.pdf",
      img: vegetace3,
      review: (
        <div>
          <b>Reviews of Volume 3:</b>
          <li>
            Anonymous in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Anonymus2012_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2012: 24 (2012){" "}
          </li>
          <li>
            János Csiky in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Csiky2013_Kitaibelia.pdf`)}>
              Kitaibelia
            </a>{" "}
            18: 187–196 (2013){" "}
          </li>
          <li>
            Adolf Češka in{" "}
            <a href="http://www.ou.edu/cas/botany-micro/ben/ben449.html">
              Botanical Electronic News
            </a>{" "}
            449 (2012){" "}
          </li>
          <li>
            Hartmut Dierschke in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Dierschke2012_Tuexenia.pdf`)}>
              Tuexenia
            </a>{" "}
            32: 372 (2012){" "}
          </li>
          <li>
            Jürgen Dengler in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-2-3_Dengler2011_Bull-EDGG.pdf`)}>
              Bulletin of the European Dry Grassland Group
            </a>{" "}
            13: 28–29 (2011){" "}
          </li>
          <li>
            Daniel Dítě in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Dite2012_Bryonora.pdf`)}>
              Bryonora
            </a>{" "}
            48: 68–70 (2012){" "}
          </li>
          <li>
            Valentin B. Golub, Aleksei N. Sorokin & L. F. Nikolaychuk in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Golub2012_Rast-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            20: 139–142 (2012)
          </li>
          <li>
            Ján Kliment in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Kliment2011_Zpr-CBS.pdf`)}>
              Zprávy České botanické společnosti
            </a>{" "}
            46: 394–396 (2011){" "}
          </li>
          <li>
            Detlef Mahn in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-1-2-3_Mahn2012_Bot-Natursch-Hessen.pdf`)}>
              Botanik und Naturschutz in Hessen
            </a>{" "}
            24: 135–143 (2012){" "}
          </li>
          <li>
            Jan Pergl in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Pergl2014_Folia-Geobot_DOI.pdf`)}>
              Folia Geobotanica
            </a>{" "}
            49 (2014){" "}
          </li>
          <li>
            Joop Schaminée in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Schaminee2012_Preslia.pdf`)}>
              Preslia
            </a>{" "}
            84: 325–326 (2012){" "}
          </li>
          <li>
            Jozef Šibík in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Sibik2012_Bull-SBS.pdf`)}>
              Bulletin Slovenskej botanickej spoločnosti{" "}
            </a>{" "}
            34: 124–126 (2012){" "}
          </li>
          <li>
            Rossen Tzonev in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-3_Tzonev2012_Phytol-Balc.pdf`)}>
              Phytologia Balcanica
            </a>{" "}
            17: 385–386 (2011){" "}
          </li>
        </div>
      )
    },
    {
      title: "4. díl – Lesní a křovinná vegetace",
      year: "2013",
      link:
        "Chytrý M. (ed.) (2013): Vegetace České republiky 4. Lesní a křovinná vegetace / Vegetation of the Czech Republic 4. Forest and Scrub Vegetation. Academia, Praha, 552 pp.",
      authors:
        "Autoři textů: M. Chytrý, J. Douda, J. Roleček, J. Sádlo, K. Boublík, R. Hédl, M. Vítková, D. Zelený, J. Navrátilová, Z. Neuhäuslová, P. Petřík, J. Kolbek, Z. Lososová, K. Šumberová a R. Hrivnák",
      technical:
        "Technická spolupráce: D. Holubová (Michalcová), K. Žáková, J. Danihelka, L. Tichý, V. Zouhar, O. Hájek a M. Kočí",
      pdfLowRes: "PDF hrubé rozlišení",
      pdfLowResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-low-resolution.pdf",
      pdfHighRes: "PDF jemné rozlišení",
      pdfHighResLink:
        "https://www.sci.muni.cz/botany/chytry/Vegetace-Ceske-republiky-4-2013-high-resolution.pdf",
      img: vegetace4,
      review: (
        <div>
          <b>Reviews of Volume 4:</b>
          <li>
            Hartmut Dierschke in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-4_Dierschke2014_Tuexenia.pdf`)}>
              Tuexenia
            </a>{" "}
            34: 491–499 (2014){" "}
          </li>
          <li>
            Valentin B. Golub in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-4_Golub2014_Rost-Rossii.pdf`)}>
              Rastitelnost Rossii
            </a>{" "}
            24: 154–160 (2014)
          </li>
          <li>
            Jaroslav Vojta in{" "}
            <a download href={withPrefix(`/Book-review_Vegetace-CR-4_Vojta2015_Ziva.pdf`)}>
              Živa
            </a>{" "}
            2015: XV (2015)
          </li>
        </div>
      )
    }
  ]
};
