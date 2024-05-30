import React, { useState, useEffect } from "react";
import { getAllEvents } from "../../api/events";
import { Box } from "@mui/material";
import { AF,AX,AL,DZ,AS,AD,AO,AI,AQ,AG,AR,AM,AW,AU,AT,AZ,BS,BH,BD,BB,BY,BE,BZ,BJ,BM,BT,BO,BQ,BA,BW,BV,BR,IO,BN,BG,BF,BI,CV,KH,CM,CA,KY,CF,TD,CL,CN,CX,CC,CO,KM,CD,CG,CK,CR,HR,CU,CW,CY,CZ,DK,DJ,DM,DO,EC,EG,SV,GQ,ER,EE,ET,Fk,FO,FJ,FI,FR,GF,PF,TF,GA,GM,GE,DE,GH,GI,GR,GL,GD,GP,GU,GT,GG,GN,GW,GY,HT,HM,HN,HK,HU,IS,IN,ID,IR,IQ,IE,IM,IL,IT,CI,JM,JP,JE,JO,KZ,KE,KI,KP,KR,KW,KG,LA,LV,LB,LS,LR,LY,LI,LT,LU,MO,MG,MW,MY,MV,ML,MT,MH,MQ,MR,MU,YT,MX,FM,MD,MC,MN,ME,MS,MA,MZ,MM,NA,NR,NP,NL,NC,NZ,NI,NE,NG,NU,NF,MK,MP,NO,OM,PK,PW,PS,PA,PG,PY,PE,PH,PN,PL,PT,PR,QA,RE,RO,RU,RW,BL,SH,KN,LC,MF,PM,VC,WS,SM,ST,SA,SN,RS,SC,SL,SG,SX,SK,SI,SB,SO,ZA,GS,SS,ES,LK,SD,SR,SJ,SE,CH,SY,TW,TJ,TZ,TH,TL,TG,TK,TO,TT,TN,TR,TM,TC,TV,UG,UA,AE,GB,US,UY,UZ,VU,VE,VN,VG,VI,WF,EH,YE,ZM,ZW,SZ,VA,FK } from 'country-flag-icons/react/3x2'

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((res) => {
      console.log("RES:", res);
      setEvents(res);
    });
  }, []);

  return (
    <div>
      {events
        .filter((event) => event.title)
        .map((event, index) => (
            <Box
            key={index}
            className="card"
            marginTop={2}
            border={2}
            borderColor="black"
            bgcolor="white"
            width={500}
            height={100}
            borderRadius="25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={2}
        >
            {getFlag(event.homecountry)}
            <h2 style={{ paddingLeft: '12px', paddingRight: '12px' }}>{event.title}</h2>
            {getFlag(event.awaycountry)}
        </Box>
        ))}
    </div>
  );
};

function getFlag(countryCode) {
    switch (countryCode) {
        case 'AF': return <AF title="Afghanistan" width={30} />;
        case 'AL': return <AL title="Albania" width={30} />;
        case 'DZ': return <DZ title="Algeria" width={30} />;
        case 'AS': return <AS title="American Samoa" width={30} />;
        case 'AD': return <AD title="Andorra" width={30} />;
        case 'AO': return <AO title="Angola" width={30} />;
        case 'AI': return <AI title="Anguilla" width={30} />;
        case 'AQ': return <AQ title="Antarctica" width={30} />;
        case 'AG': return <AG title="Antigua and Barbuda" width={30} />;
        case 'AR': return <AR title="Argentina" width={30} />;
        case 'AM': return <AM title="Armenia" width={30} />;
        case 'AW': return <AW title="Aruba" width={30} />;
        case 'AU': return <AU title="Australia" width={30} />;
        case 'AT': return <AT title="Austria" width={30} />;
        case 'AZ': return <AZ title="Azerbaijan" width={30} />;
        case 'BS': return <BS title="Bahamas" width={30} />;
        case 'BH': return <BH title="Bahrain" width={30} />;
        case 'BD': return <BD title="Bangladesh" width={30} />;
        case 'BB': return <BB title="Barbados" width={30} />;
        case 'BY': return <BY title="Belarus" width={30} />;
        case 'BE': return <BE title="Belgium" width={30} />;
        case 'BZ': return <BZ title="Belize" width={30} />;
        case 'BJ': return <BJ title="Benin" width={30} />;
        case 'BM': return <BM title="Bermuda" width={30} />;
        case 'BT': return <BT title="Bhutan" width={30} />;
        case 'BO': return <BO title="Bolivia" width={30} />;
        case 'BQ': return <BQ title="Bonaire, Sint Eustatius and Saba" width={30} />;
        case 'BA': return <BA title="Bosnia and Herzegovina" width={30} />;
        case 'BW': return <BW title="Botswana" width={30} />;
        case 'BR': return <BR title="Brazil" width={30} />;
        case 'IO': return <IO title="British Indian Ocean Territory" width={30} />;
        case 'BN': return <BN title="Brunei Darussalam" width={30} />;
        case 'BG': return <BG title="Bulgaria" width={30} />;
        case 'BF': return <BF title="Burkina Faso" width={30} />;
        case 'BI': return <BI title="Burundi" width={30} />;
        case 'CV': return <CV title="Cabo Verde" width={30} />;
        case 'KH': return <KH title="Cambodia" width={30} />;
        case 'CM': return <CM title="Cameroon" width={30} />;
        case 'CA': return <CA title="Canada" width={30} />;
        case 'KY': return <KY title="Cayman Islands" width={30} />;
        case 'CF': return <CF title="Central African Republic" width={30} />;
        case 'TD': return <TD title="Chad" width={30} />;
        case 'CL': return <CL title="Chile" width={30} />;
        case 'CN': return <CN title="China" width={30} />;
        case 'CX': return <CX title="Christmas Island" width={30} />;
        case 'CC': return <CC title="Cocos (Keeling) Islands" width={30} />;
        case 'CO': return <CO title="Colombia" width={30} />;
        case 'KM': return <KM title="Comoros" width={30} />;
        case 'CG': return <CG title="Congo" width={30} />;
        case 'CD': return <CD title="Congo, Democratic Republic of the" width={30} />;
        case 'CK': return <CK title="Cook Islands" width={30} />;
        case 'CR': return <CR title="Costa Rica" width={30} />;
        case 'HR': return <HR title="Croatia" width={30} />;
        case 'CU': return <CU title="Cuba" width={30} />;
        case 'CW': return <CW title="Curaçao" width={30} />;
        case 'CY': return <CY title="Cyprus" width={30} />;
        case 'CZ': return <CZ title="Czech Republic" width={30} />;
        case 'DK': return <DK title="Denmark" width={30} />;
        case 'DJ': return <DJ title="Djibouti" width={30} />;
        case 'DM': return <DM title="Dominica" width={30} />;
        case 'DO': return <DO title="Dominican Republic" width={30} />;
        case 'EC': return <EC title="Ecuador" width={30} />;
        case 'EG': return <EG title="Egypt" width={30} />;
        case 'SV': return <SV title="El Salvador" width={30} />;
        case 'GQ': return <GQ title="Equatorial Guinea" width={30} />;
        case 'ER': return <ER title="Eritrea" width={30} />;
        case 'EE': return <EE title="Estonia" width={30} />;
        case 'SZ': return <SZ title="Eswatini" width={30} />;
        case 'ET': return <ET title="Ethiopia" width={30} />;
        case 'FK': return <FK title="Falkland Islands (Malvinas)" width={30} />;
        case 'FO': return <FO title="Faroe Islands" width={30} />;
        case 'FJ': return <FJ title="Fiji" width={30} />;
        case 'FI': return <FI title="Finland" width={30} />;
        case 'FR': return <FR title="France" width={30} />;
        case 'GF': return <GF title="French Guiana" width={30} />;
        case 'PF': return <PF title="French Polynesia" width={30} />;
        case 'TF': return <TF title="French Southern Territories" width={30} />;
        case 'GA': return <GA title="Gabon" width={30} />;
        case 'GM': return <GM title="Gambia" width={30} />;
        case 'GE': return <GE title="Georgia" width={30} />;
        case 'DE': return <DE title="Germany" width={30} />;
        case 'GH': return <GH title="Ghana" width={30} />;
        case 'GI': return <GI title="Gibraltar" width={30} />;
        case 'GR': return <GR title="Greece" width={30} />;
        case 'GL': return <GL title="Greenland" width={30} />;
        case 'GD': return <GD title="Grenada" width={30} />;
        case 'GP': return <GP title="Guadeloupe" width={30} />;
        case 'GU': return <GU title="Guam" width={30} />;
        case 'GT': return <GT title="Guatemala" width={30} />;
        case 'GG': return <GG title="Guernsey" width={30} />;
        case 'GN': return <GN title="Guinea" width={30} />;
        case 'GW': return <GW title="Guinea-Bissau" width={30} />;
        case 'GY': return <GY title="Guyana" width={30} />;
        case 'HT': return <HT title="Haiti" width={30} />;
        case 'HM': return <HM title="Heard Island and McDonald Islands" width={30} />;
        case 'VA': return <VA title="Holy See" width={30} />;
        case 'HN': return <HN title="Honduras" width={30} />;
        case 'HK': return <HK title="Hong Kong" width={30} />;
        case 'HU': return <HU title="Hungary" width={30} />;
        case 'IS': return <IS title="Iceland" width={30} />;
        case 'IN': return <IN title="India" width={30} />;
        case 'ID': return <ID title="Indonesia" width={30} />;
        case 'IR': return <IR title="Iran" width={30} />;
        case 'IQ': return <IQ title="Iraq" width={30} />;
        case 'IE': return <IE title="Ireland" width={30} />;
        case 'IM': return <IM title="Isle of Man" width={30} />;
        case 'IL': return <IL title="Israel" width={30} />;
        case 'IT': return <IT title="Italy" width={30} />;
        case 'JM': return <JM title="Jamaica" width={30} />;
        case 'JP': return <JP title="Japan" width={30} />;
        case 'JE': return <JE title="Jersey" width={30} />;
        case 'JO': return <JO title="Jordan" width={30} />;
        case 'KZ': return <KZ title="Kazakhstan" width={30} />;
        case 'KE': return <KE title="Kenya" width={30} />;
        case 'KI': return <KI title="Kiribati" width={30} />;
        case 'KP': return <KP title="North Korea" width={30} />;
        case 'KR': return <KR title="South Korea" width={30} />;
        case 'KW': return <KW title="Kuwait" width={30} />;
        case 'KG': return <KG title="Kyrgyzstan" width={30} />;
        case 'LA': return <LA title="Lao People's Democratic Republic" width={30} />;
        case 'LV': return <LV title="Latvia" width={30} />;
        case 'LB': return <LB title="Lebanon" width={30} />;
        case 'LS': return <LS title="Lesotho" width={30} />;
        case 'LR': return <LR title="Liberia" width={30} />;
        case 'LY': return <LY title="Libya" width={30} />;
        case 'LI': return <LI title="Liechtenstein" width={30} />;
        case 'LT': return <LT title="Lithuania" width={30} />;
        case 'LU': return <LU title="Luxembourg" width={30} />;
        case 'MO': return <MO title="Macao" width={30} />;
        case 'MG': return <MG title="Madagascar" width={30} />;
        case 'MW': return <MW title="Malawi" width={30} />;
        case 'MY': return <MY title="Malaysia" width={30} />;
        case 'MV': return <MV title="Maldives" width={30} />;
        case 'ML': return <ML title="Mali" width={30} />;
        case 'MT': return <MT title="Malta" width={30} />;
        case 'MH': return <MH title="Marshall Islands" width={30} />;
        case 'MQ': return <MQ title="Martinique" width={30} />;
        case 'MR': return <MR title="Mauritania" width={30} />;
        case 'MU': return <MU title="Mauritius" width={30} />;
        case 'YT': return <YT title="Mayotte" width={30} />;
        case 'MX': return <MX title="Mexico" width={30} />;
        case 'FM': return <FM title="Micronesia" width={30} />;
        case 'MD': return <MD title="Moldova" width={30} />;
        case 'MC': return <MC title="Monaco" width={30} />;
        case 'MN': return <MN title="Mongolia" width={30} />;
        case 'ME': return <ME title="Montenegro" width={30} />;
        case 'MS': return <MS title="Montserrat" width={30} />;
        case 'MA': return <MA title="Morocco" width={30} />;
        case 'MZ': return <MZ title="Mozambique" width={30} />;
        case 'MM': return <MM title="Myanmar" width={30} />;
        case 'NA': return <NA title="Namibia" width={30} />;
        case 'NR': return <NR title="Nauru" width={30} />;
        case 'NP': return <NP title="Nepal" width={30} />;
        case 'NL': return <NL title="Netherlands" width={30} />;
        case 'NC': return <NC title="New Caledonia" width={30} />;
        case 'NZ': return <NZ title="New Zealand" width={30} />;
        case 'NI': return <NI title="Nicaragua" width={30} />;
        case 'NE': return <NE title="Niger" width={30} />;
        case 'NG': return <NG title="Nigeria" width={30} />;
        case 'NU': return <NU title="Niue" width={30} />;
        case 'NF': return <NF title="Norfolk Island" width={30} />;
        case 'MK': return <MK title="North Macedonia" width={30} />;
        case 'MP': return <MP title="Northern Mariana Islands" width={30} />;
        case 'NO': return <NO title="Norway" width={30} />;
        case 'OM': return <OM title="Oman" width={30} />;
        case 'PK': return <PK title="Pakistan" width={30} />;
        case 'PW': return <PW title="Palau" width={30} />;
        case 'PS': return <PS title="Palestine" width={30} />;
        case 'PA': return <PA title="Panama" width={30} />;
        case 'PG': return <PG title="Papua New Guinea" width={30} />;
        case 'PY': return <PY title="Paraguay" width={30} />;
        case 'PE': return <PE title="Peru" width={30} />;
        case 'PH': return <PH title="Philippines" width={30} />;
        case 'PN': return <PN title="Pitcairn" width={30} />;
        case 'PL': return <PL title="Poland" width={30} />;
        case 'PT': return <PT title="Portugal" width={30} />;
        case 'PR': return <PR title="Puerto Rico" width={30} />;
        case 'QA': return <QA title="Qatar" width={30} />;
        case 'RE': return <RE title="Réunion" width={30} />;
        case 'RO': return <RO title="Romania" width={30} />;
        case 'RU': return <RU title="Russia" width={30} />;
        case 'RW': return <RW title="Rwanda" width={30} />;
        case 'BL': return <BL title="Saint Barthélemy" width={30} />;
        case 'SH': return <SH title="Saint Helena, Ascension and Tristan da Cunha" width={30} />;
        case 'KN': return <KN title="Saint Kitts and Nevis" width={30} />;
        case 'LC': return <LC title="Saint Lucia" width={30} />;
        case 'MF': return <MF title="Saint Martin (French part)" width={30} />;
        case 'PM': return <PM title="Saint Pierre and Miquelon" width={30} />;
        case 'VC': return <VC title="Saint Vincent and the Grenadines" width={30} />;
        case 'WS': return <WS title="Samoa" width={30} />;
        case 'SM': return <SM title="San Marino" width={30} />;
        case 'ST': return <ST title="Sao Tome and Principe" width={30} />;
        case 'SA': return <SA title="Saudi Arabia" width={30} />;
        case 'SN': return <SN title="Senegal" width={30} />;
        case 'RS': return <RS title="Serbia" width={30} />;
        case 'SC': return <SC title="Seychelles" width={30} />;
        case 'SL': return <SL title="Sierra Leone" width={30} />;
        case 'SG': return <SG title="Singapore" width={30} />;
        case 'SX': return <SX title="Sint Maarten (Dutch part)" width={30} />;
        case 'SK': return <SK title="Slovakia" width={30} />;
        case 'SI': return <SI title="Slovenia" width={30} />;
        case 'SB': return <SB title="Solomon Islands" width={30} />;
        case 'SO': return <SO title="Somalia" width={30} />;
        case 'ZA': return <ZA title="South Africa" width={30} />;
        case 'GS': return <GS title="South Georgia and the South Sandwich Islands" width={30} />;
        case 'SS': return <SS title="South Sudan" width={30} />;
        case 'ES': return <ES title="Spain" width={30} />;
        case 'LK': return <LK title="Sri Lanka" width={30} />;
        case 'SD': return <SD title="Sudan" width={30} />;
        case 'SR': return <SR title="Suriname" width={30} />;
        case 'SJ': return <SJ title="Svalbard and Jan Mayen" width={30} />;
        case 'SE': return <SE title="Sweden" width={30} />;
        case 'CH': return <CH title="Switzerland" width={30} />;
        case 'SY': return <SY title="Syrian Arab Republic" width={30} />;
        case 'TW': return <TW title="Taiwan" width={30} />;
        case 'TJ': return <TJ title="Tajikistan" width={30} />;
        case 'TZ': return <TZ title="Tanzania" width={30} />;
        case 'TH': return <TH title="Thailand" width={30} />;
        case 'TL': return <TL title="Timor-Leste" width={30} />;
        case 'TG': return <TG title="Togo" width={30} />;
        case 'TK': return <TK title="Tokelau" width={30} />;
        case 'TO': return <TO title="Tonga" width={30} />;
        case 'TT': return <TT title="Trinidad and Tobago" width={30} />;
        case 'TN': return <TN title="Tunisia" width={30} />;
        case 'TR': return <TR title="Turkey" width={30} />;
        case 'TM': return <TM title="Turkmenistan" width={30} />;
        case 'TC': return <TC title="Turks and Caicos Islands" width={30} />;
        case 'TV': return <TV title="Tuvalu" width={30} />;
        case 'UG': return <UG title="Uganda" width={30} />;
        case 'UA': return <UA title="Ukraine" width={30} />;
        case 'AE': return <AE title="United Arab Emirates" width={30} />;
        case 'GB': return <GB title="United Kingdom" width={30} />;
        case 'US': return <US title="United States" width={30} />;
        case 'UY': return <UY title="Uruguay" width={30} />;
        case 'UZ': return <UZ title="Uzbekistan" width={30} />;
        case 'VU': return <VU title="Vanuatu" width={30} />;
        case 'VE': return <VE title="Venezuela" width={30} />;
        case 'VN': return <VN title="Vietnam" width={30} />;
        case 'VG': return <VG title="Virgin Islands (British)" width={30} />;
        case 'VI': return <VI title="Virgin Islands (U.S.)" width={30} />;
        case 'WF': return <WF title="Wallis and Futuna" width={30} />;
        case 'EH': return <EH title="Western Sahara" width={30} />;
        case 'YE': return <YE title="Yemen" width={30} />;
        case 'ZM': return <ZM title="Zambia" width={30} />;
        case 'ZW': return <ZW title="Zimbabwe" width={30} />;
        default:
            return null; // Return null or a default flag if the country code is not recognized
    }
}

export default EventList;
