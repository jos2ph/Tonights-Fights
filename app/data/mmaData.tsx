// https://mmafightcardsapi.adaptable.app/

const cardData = [
  {
    title: "ONE Fight Night 27: Tang vs. Abdullaev",
    date: "Friday, January 10,  8:00 PM ET",
    link: "https://www.tapology.com/fightcenter/events/119285-one-fight-night-27",
    fights: [
      {
        main: true,
        weight: "155",
        fighterA: {
          name: "Kai Tang",
          record: "19-3",
          country:
            "https://www.tapology.com/assets/flags/CN-39a4cba872f45e48783a6aa2584da07957177092136272167f4965b759420e9e.gif",
          picture:
            "https://images.tapology.com/headshot_images/131298/preview/Screenshot_20220721_172343.jpg?1658420689",
          link: "https://www.tapology.com/fightcenter/fighters/131298-kai-tang",
        },
        fighterB: {
          name: "Akbar Abdullaev",
          record: "11-0",
          country:
            "https://www.tapology.com/assets/flags/KG-e82d667ad628d5c54faf7005581782432a868fed670c526bbd17e98405205cdb.gif",
          picture:
            "https://images.tapology.com/headshot_images/275039/preview/Untitleds.jpg?1607730769",
          link: "https://www.tapology.com/fightcenter/fighters/275039-akbar-abdullaev",
        },
      },
      {
        main: true,
        weight: "115",
        fighterA: {
          name: "Denice Zamboanga",
          record: "11-2",
          country:
            "https://www.tapology.com/assets/flags/PH-b05cbd5fbea0d9c557c0f879412ce20b22e39c95c3f650888f477fd7601c696b.gif",
          picture:
            "https://images.tapology.com/headshot_images/170743/preview/Denice_Zamboanga-hs.jpg?1600096755",
          link: "https://www.tapology.com/fightcenter/fighters/170743-denice-zamboanga",
        },
        fighterB: {
          name: "Alyona Rassohyna",
          record: "13-5",
          country:
            "https://www.tapology.com/assets/flags/UA-cb48655348d284775d0c64345f5019fd621aacffe2c219c74db8038ebba29c85.gif",
          picture:
            "https://images.tapology.com/headshot_images/64137/preview/Screenshot_%283%29.png?1733013699",
          link: "https://www.tapology.com/fightcenter/fighters/64137-alyona-rassohyna",
        },
      },
      {
        main: true,
        weight: "155",
        fighterA: {
          name: "Luke Lessei",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
          picture:
            "https://images.tapology.com/headshot_images/297265/preview/hs.png?1705859888",
          link: "https://www.tapology.com/fightcenter/fighters/297265-luke-lessei-the-chef",
        },
        fighterB: {
          name: "Cody Jerome",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/CA-ce6ad43e18030f818ef194052e9587e6d9941cb4401751955611223ec2d2c848.gif",
          picture:
            "https://images.tapology.com/headshot_images/92639/preview/RIBZ.jpg?1548478714",
          link: "https://www.tapology.com/fightcenter/fighters/92639-cody-jerome",
        },
      },
      {
        main: true,
        weight: "145",
        fighterA: {
          name: "Rambolek Tor Yotha",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/TH-074f5641611b5366883e960c5077ad0dc605e2f0bde7270910c0e36bd5e3e19f.gif",
          picture:
            "https://images.tapology.com/headshot_images/288253/preview/rambolekheadshot.JPG?1642754461",
          link: "https://www.tapology.com/fightcenter/fighters/288253-rambolek-tor-yotha",
        },
        fighterB: {
          name: "Parham Gheirati",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/IR-7ebd7bcd85e1c0f2539496035203787bc5f334a4b8951afe7fa5f4a2c55842ff.gif",
          picture:
            "https://images.tapology.com/headshot_images/412881/preview/Screenshot_%281%29.png?1735279905",
          link: "https://www.tapology.com/fightcenter/fighters/412881-parham-gheiratimarkeye",
        },
      },
      {
        main: true,
        weight: "180",
        fighterA: {
          name: "Tommy Langaker",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/NO-3a69f5ee33f29fb305628be49486794a946963a3a97a90ee81c798cc35f1ba57.gif",
          picture:
            "https://images.tapology.com/headshot_images/213019/preview/tommy-langaker.jpg?1551744554",
          link: "https://www.tapology.com/fightcenter/fighters/213019-tommy-langaker",
        },
        fighterB: {
          name: "Dante Leon",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/CA-ce6ad43e18030f818ef194052e9587e6d9941cb4401751955611223ec2d2c848.gif",
          picture:
            "https://images.tapology.com/headshot_images/208796/preview/Dante-Leon.png?1548258786",
          link: "https://www.tapology.com/fightcenter/fighters/208796-dante-leon",
        },
      },
      {
        main: true,
        weight: "145",
        fighterA: {
          name: "K. Sor.Jor.Piek Uthai",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/TH-074f5641611b5366883e960c5077ad0dc605e2f0bde7270910c0e36bd5e3e19f.gif",
          picture:
            "https://images.tapology.com/headshot_images/234463/preview/Screenshot_%285%29.png?1733013834",
          link: "https://www.tapology.com/fightcenter/fighters/234463-kulabdam-sor-jor-piek-uthai-left-meteorite",
        },
        fighterB: {
          name: "John Lineker",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/BR-45af1ab77cd750eff617a8b71f64b318c9a4ecf06c863a2c63cff71550930fe7.gif",
          picture:
            "https://images.tapology.com/headshot_images/15880/preview/John-Lineker-hs.png?1422232039",
          link: "https://www.tapology.com/fightcenter/fighters/15880-john-lineker",
        },
      },
      {
        main: true,
        weight: "125",
        fighterA: {
          name: "Tatsumitsu Wada",
          record: "26-12-2",
          country:
            "https://www.tapology.com/assets/flags/JP-9a8638bb4ad16191d186a0ecfb4a896adc79ecd2829785ed00e32d6537ae88e3.gif",
          picture:
            "https://images.tapology.com/headshot_images/4803/preview/Tatsumitsu_Wada.jpg?1550719267",
          link: "https://www.tapology.com/fightcenter/fighters/4803-tatsumitsu-wada",
        },
        fighterB: {
          name: "Sanzhar Zakirov",
          record: "10-0",
          country:
            "https://www.tapology.com/assets/flags/UZ-e40dacd38e6a24919d7fa41f8284acd039b4e70ec541da1e6f2693322a2670b7.gif",
          picture:
            "https://images.tapology.com/headshot_images/307580/preview/Sanjar_Zakirov-hs.jpg?1679953943",
          link: "https://www.tapology.com/fightcenter/fighters/307580-sanjar-zakirov",
        },
      },
      {
        main: true,
        weight: "155",
        fighterA: {
          name: "Aaron Cañarte",
          record: "10-2",
          country:
            "https://www.tapology.com/assets/flags/EC-042d202099a523aa750061e24c02f26ce418774ece53e471fe323ac1115aee44.gif",
          picture:
            "https://images.tapology.com/headshot_images/159000/preview/Aaron_Can%CC%83arte-hs.jpg?1702054306",
          link: "https://www.tapology.com/fightcenter/fighters/159000-aaron-caarte",
        },
        fighterB: {
          name: "Timofey Nastyukhin",
          record: "14-8",
          country:
            "https://www.tapology.com/assets/flags/RU-3ce9ca248b0d428f663c68cea5b91068d901c71d77fcb4be147e8d0e7500d724.gif",
          picture:
            "https://images.tapology.com/headshot_images/72236/preview/Timofey_Nastyukhin.jpg?1636661537",
          link: "https://www.tapology.com/fightcenter/fighters/72236-timofey-nastyukhin",
        },
      },
      {
        main: true,
        weight: "115",
        fighterA: {
          name: "Chihiro Sawada",
          record: "8-0-1",
          country:
            "https://www.tapology.com/assets/flags/JP-9a8638bb4ad16191d186a0ecfb4a896adc79ecd2829785ed00e32d6537ae88e3.gif",
          picture:
            "https://images.tapology.com/headshot_images/289752/preview/Screenshot.png?1708902798",
          link: "https://www.tapology.com/fightcenter/fighters/289752-chihiro-sawada",
        },
        fighterB: {
          name: "Bo Meng",
          record: "21-7",
          country:
            "https://www.tapology.com/assets/flags/CN-39a4cba872f45e48783a6aa2584da07957177092136272167f4965b759420e9e.gif",
          picture:
            "https://images.tapology.com/headshot_images/120312/preview/Bo_Meng.jpg?1549311591",
          link: "https://www.tapology.com/fightcenter/fighters/120312-bo-meng",
        },
      },
      {
        main: true,
        weight: "145",
        fighterA: {
          name: "Suablack Tor.Pran49",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/TH-074f5641611b5366883e960c5077ad0dc605e2f0bde7270910c0e36bd5e3e19f.gif",
          picture:
            "https://images.tapology.com/headshot_images/390862/preview/Suablack-1200x1165-1-600x583.png?1691547660",
          link: "https://www.tapology.com/fightcenter/fighters/390862-suablack-tor-pran49",
        },
        fighterB: {
          name: "Dmitriy Kovtun",
          record: "",
          country:
            "https://www.tapology.com/assets/flags/RU-3ce9ca248b0d428f663c68cea5b91068d901c71d77fcb4be147e8d0e7500d724.gif",
          picture:
            "https://images.tapology.com/headshot_images/362546/preview/Screenshot_%281%29.png?1722015255",
          link: "https://www.tapology.com/fightcenter/fighters/362546-dmitriy-kovtun",
        },
      },
    ],
  },
];

export default cardData;
