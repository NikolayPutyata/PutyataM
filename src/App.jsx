import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DrawerMenu from "./components/DrawerMenu.jsx";
import Main from "./components/Main.jsx";
import Contacts from "./components/Contact.jsx";

/* --- Юридичні послуги --- */
import Registration from "./services/FOP.jsx";
import Changes from "./services/Changes.jsx"; // Зміни ФОП/ТОВ
import Liquidation from "./services/Liquidation.jsx"; // Ліквідація ФОП/ТОВ
import TM from "./services/TM.jsx"; // Реєстрація ТМ
import Power from "./services/Power.jsx"; // Реєстрація потужностей
import LicensePage from "./services/License.jsx"; // Отримання/продовження ліцензій
import Consultation from "./services/Consultation.jsx"; // Індивідуальна консультація
import Contracts from "./services/Contracts.jsx"; // Договори

/* --- Бухгалтерія --- */
import AccountingFOP from "./accounting/FOP.jsx";
import AccountingRRO from "./accounting/RRO.jsx";
import AccountingAudit from "./accounting/Audit.jsx";

/* --- Гранти --- */
import GrantsBusiness from "./grants/Business.jsx";
import GrantsVeterans from "./grants/Veterans.jsx";

/* --- Нотаріус --- */
import NotaryPower from "./notary/Power.jsx";
import NotaryCertification from "./notary/Certification.jsx";
import NotaryRegistration from "./notary/Registration.jsx";

/* --- Статичні --- */
import About from "./components/About.jsx";
import AccountingTOV from "./accounting/AccountingTOV.jsx";

import TranslateDoc from "./translate/TranslateDoc.jsx";
import TranslatePer from "./translate/TranslatePer.jsx";
import IPN from "./inosem/IPN.jsx";
import Posvidka from "./inosem/Posvidka.jsx";
import Work from "./inosem/Work.jsx";
import Paper from "./accounting/Paper.jsx";
import KIK from "./accounting/KIK.jsx";
import Advokatsu from "./advokat/Advokatsu.jsx";
import Advokatco from "./advokat/Advokatco.jsx";



function App() {
  return (
    <div className="font-sans text-black bg-white">
      <Router>
        <div className="drawer drawer-end">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <Header />

            <Routes>
              <Route path="/" element={<Main />} />
              

              {/* Юридичні послуги */}
              <Route path="/services/registration" element={<Registration />} />
              <Route path="/services/changes" element={<Changes />} />
              <Route path="/services/liquidation" element={<Liquidation />} />
              <Route path="/services/tm" element={<TM />} />
              <Route path="/services/power" element={<Power />} />
              <Route path="/services/license" element={<LicensePage />} />
              <Route path="/services/consultation" element={<Consultation />} />
              <Route path="/services/contracts" element={<Contracts />} />

              {/* Бухгалтерія */}
              <Route path="/accounting/fop" element={<AccountingFOP />} />
              <Route path="/accounting/tov" element={<AccountingTOV />} />
              <Route path="/accounting/paper" element={<Paper />} />
              <Route path="/accounting/rro" element={<AccountingRRO />} />
              <Route path="/accounting/kik" element={<KIK />} />
              <Route path="/accounting/audit" element={<AccountingAudit />} />

              {/* Гранти */}
              <Route path="/grants/business" element={<GrantsBusiness />} />
              <Route path="/grants/veterans" element={<GrantsVeterans />} />

              {/* Нотаріус */}
              <Route path="/notary/power" element={<NotaryPower />} />
              <Route path="/notary/certification" element={<NotaryCertification />} />
              <Route path="/notary/registration" element={<NotaryRegistration />} />

              {/* Адвокат */}
              <Route path="/advokat/sud" element={<Advokatsu />} />
              <Route path="/advokat/cons" element={<Advokatco />} />

              {/* Бюро */}
              <Route path="/translate/doc" element={<TranslateDoc />} />
              <Route path="/translate/per" element={<TranslatePer />} />

              {/* Іноземцям */}
              <Route path="/ino/ipn" element={<IPN />} />
              <Route path="/ino/pos" element={<Posvidka />} />
              <Route path="/ino/work" element={<Work />} />
              

              {/* Статичні */}
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>

            <Footer />
          </div>

          <DrawerMenu />
        </div>
      </Router>
    </div>
  );
}

export default App;
