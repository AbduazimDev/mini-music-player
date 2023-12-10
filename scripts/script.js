new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "All Time Low",
            artist: "Jon Bellion, Stormzy",
            cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/all_time_low.jpg",
            source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/All_Time_Low.mp3",
            url: "https://youtu.be/AXnqkVTFUqY",
            favorited: false
          },
          {
            name: "none",
            artist: "nt",
            cover: "none",
            source: "https://files.thenaatsharif.com/download/index.php?track=ayisha-abdul-basith/muhammad-nabina-naat.mp3",
            url: "https://youtu.be/gk2fKTitijs",
            favorited: true
          },
          {"name": "Muhammad Nabina Naat", "source": "https://files.thenaatsharif.com/downloads/ayisha-abdul-basith/muhammad-nabina-naat.mp3"},
          {"name": "Falasteen Biladi – فلسطين بلادي", "source": "https://files.thenaatsharif.com/downloads/humood/falasteen-biladi.mp3"},
          {"name": "Ya Man Salaita Anbiya", "source": "https://files.thenaatsharif.com/downloads/maher-zain/ya-man-salaita-anbiya.mp3"},
          {"name": "Rise – Audio Nasheed", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/rise.mp3"},
          {"name": "The Best Of Pearls", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/the-best-of-pearl.mp3"},
          {"name": "A Thousand Greetings", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/a-thousand-greetings.mp3"},
          {"name": "My Dream", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/my-dream.mp3"},
          {"name": "Mountains Of Friendship", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/mountains-of-friendship.mp3"},
          {"name": "My Arabic Language", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/my-arabic-language.mp3"},
          {"name": "Jo Quran Mitanay Aye Ga", "source": "https://files.thenaatsharif.com/downloads/sibghatullah-iqbal/jo-quran-mitanay-aye-ga.mp3"},
          {"name": "Maa Ki Shan", "source": "https://files.thenaatsharif.com/downloads/hafiz-ahmed-raza-qadri/maa-ki-shan.mp3"},
          {"name": "Innil Tiya Ree Hassaba", "source": "https://files.thenaatsharif.com/downloads/syeda-areeba-fatima/innil-tiya-ree-hassaba.mp3"},
          {"name": "Labbaik Palestine Labaik Ya Aqsa", "source": "https://files.thenaatsharif.com/downloads/muhammad-ali-quraishi/labbaik-palestine-labaik-ya-aqsa.mp3"},
          {"name": "Labaik Ya Aqsa", "source": "https://files.thenaatsharif.com/downloads/hafiz-zubair-ahamd/labaik-ya-aqsa.mp3"},
          {"name": "Rehla La Tantahi", "source": "https://files.thenaatsharif.com/downloads/humood/rehla-la-tantahi.mp3"},
          {"name": "Shukran Laka Rabbi", "source": "https://files.thenaatsharif.com/downloads/ahmed-bukhatir/laka-rabbi-nasheed.mp3"},
          {"name": "Saunadi Saunadi – Arabic Nasheed", "source": "https://files.thenaatsharif.com/downloads/hadi-faour/saunadi-saunadi.mp3"},
          {"name": "Ya Habibi Ya Shafi Ya Rasool Allah", "source": "https://files.thenaatsharif.com/downloads/maher-zain/ya-habibi-ya-shafi-ya-rasool-allah.mp3"},
          {"name": "Ya Man Salaita Anbiya By Maher Zain", "source": "https://files.thenaatsharif.com/downloads/maher-zain/ya-man-salaita-anbiya.mp3"},
          {"name": "Habibi Ya Muhammad", "source": "https://files.thenaatsharif.com/downloads/maher-zain/habibi-ya-muhammad.mp3"},
          {"name": "Inshallah", "source": "https://files.thenaatsharif.com/downloads/maher-zain/inshallah.mp3"},
          {"name": "Quran Nasheed", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqi/quran-nasheed.mp3"},
          {"name": "Bushra Lana", "source": "https://files.thenaatsharif.com/downloads/mohamed-tarek/bushra-lana.mp3"},
          {"name": "Satu Jamilatan", "source": "https://files.thenaatsharif.com/downloads/baraa-masoud/satu-jamilatan.mp3"},
          {"name": "Kuntu Maitan", "source": "https://files.thenaatsharif.com/downloads/kostyapetrova/kuntu-maitan.mp3"},
          {"name": "Aye Dushman E Deen", "source": "https://files.thenaatsharif.com/downloads/salahuddin-al-maroofi/aye-dushman-e-deen.mp3"},
          {"name": "Ye Sochain Muntashir", "source": "https://files.thenaatsharif.com/downloads/jalabeeb-qadri/ye-sochain-muntashir.mp3"},
          {"name": "Sabilun Murih", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/sabilun-murih.mp3"},
          {"name": "Jamal Al Wujood", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/jamal-al-wujood.mp3"},
          {"name": "Khwab E Ghaflat Me Soye Hue Momino", "source": "https://files.thenaatsharif.com/downloads/shair-muhammad-burhan/khwab-e-ghaflat-me-soye-hue-momino.mp3"},
          {"name": "Ab Yaad Na Aao Rehne Do", "source": "https://files.thenaatsharif.com/downloads/abdurehman-huzaifi/ab-yaad-na-aao-rehne-do.mp3"},
          {"name": "Cheetah Ka Jigar", "source": "https://files.thenaatsharif.com/downloads/muaviya-bin-azam/cheetah-ka-jigar.mp3"},
          {"name": "Al Qawlu Qawlu Sawarim", "source": "https://files.thenaatsharif.com/downloads/el-azhar/al-qawlu-qawlu-sawarim.mp3"},
          {"name": "Aleky Eyoun", "source": "https://files.thenaatsharif.com/downloads/ahmed-saad/aleky-eyoun.mp3"},
          {"name": "Salam Ya Mehdi", "source": "https://files.thenaatsharif.com/downloads/imam/salam-ya-mehdi.mp3"},
          {"name": "La Ilaha Illallah Muhammadur Rasulullah", "source": "https://files.thenaatsharif.com/downloads/sami-yusuf/la-ilaha-illallah-muhammadur-rasulullah.mp3"},
          {"name": "Ya Ilahi", "source": "https://files.thenaatsharif.com/downloads/ishaq-ayubi/Ya-Ilahi.mp3"},
          {"name": "Maula Ya Salli Wa Sallim Without Music", "source": "https://files.thenaatsharif.com/downloads/unknown/maula-ya-salli-wa-sallim-without-music.mp3"},
          {"name": "Tasbih", "source": "https://files.thenaatsharif.com/downloads/ayisha-abdul-basith/tasbih.mp3"},
          {"name": "Ahwarun Ahwarun (أنا ثائر أنا ثائر)", "source": "https://files.thenaatsharif.com/downloads/هادي-فاعور/ahwarun-ahwarun.mp3"},
          {"name": "Jannati Dunya Ya Ummi", "source": "https://files.thenaatsharif.com/downloads/xadidja-magomedova/jannati-dunya-ya-ummi.mp3"},
          {"name": "Liyakun Yawmuka", "source": "https://files.thenaatsharif.com/downloads/ahmed-bukhatir/liyakun-yawmuka.mp3"},
          {"name": "Eidun Mubarak", "source": "https://files.thenaatsharif.com/downloads/maher-zain/eidun-mubarak.mp3"},
          {"name": "Rahmatun Lil Alameen", "source": "https://files.thenaatsharif.com/downloads/maher-zain/rahmatun-lil-alameen.mp3"},
          {"name": "Hasbi Rabbi", "source": "https://files.thenaatsharif.com/downloads/mesut-kurtis/hasbi-rabbi.mp3"},
          {"name": "Ya Habibi", "source": "https://files.thenaatsharif.com/downloads/mevlan-kurtishi/ya-habibi.mp3"},
          {"name": "Taal Shawqi", "source": "https://files.thenaatsharif.com/downloads/ahmed-bukhatir/taal-shawqi.mp3"},
          {"name": "Fathima Naayagiyaar Maalai", "source": "https://files.thenaatsharif.com/downloads/ayisha-abdul-basith/fathima-naayagiyaar-maalai.mp3"},
          {"name": "Every Breath Is A Blessing", "source": "https://files.thenaatsharif.com/downloads/mesut-kurtis/every-breath-is-a-blessing.mp3"},
          {"name": "Mawlaya – Salli Wa Sallim", "source": "https://files.thenaatsharif.com/downloads/maher-zain/mawlaya(arabic).mp3"},
          {"name": "Allah Hu Relaxing Sleep", "source": "https://files.thenaatsharif.com/downloads/rao-brothers/allah-hu-relaxing-sleep.mp3"},
          {"name": "Allah Jalalaho – ( الله جل جلاله )", "source": "https://files.thenaatsharif.com/downloads/mohammad-zafar/allah-jalalaho.mp3"},
          {"name": "Wal Khat U Hussaini", "source": "https://files.thenaatsharif.com/downloads/هادي%20فاعور/wal-khat-u-hussaini.mp3"},
          {"name": "Ahrarun Ahrarun – Arabic Nasheed", "source": "https://files.thenaatsharif.com/downloads/هادي-فاعور/ahrarun-ahrarun.mp3"},
          {"name": "Kamarun Kamarun", "source": "https://files.thenaatsharif.com/downloads/mohamed-tarek/kamarun-kamarun.mp3"},
          {"name": "Rohman Ya Rohman", "source": "https://files.thenaatsharif.com/downloads/sabyan/rohman-ya-rohman.mp3"},
          {"name": "Allah Allah Aghisna", "source": "https://files.thenaatsharif.com/downloads/nazwa-maulidia/allah-allah-aghisna.mp3"},
          {"name": "Arabic Nasheed", "source": "https://files.thenaatsharif.com/downloads/mohamed-tarek/arabic-nasheed.mp3"},
          {"name": "Kun Anta – كن أنت", "source": "https://files.thenaatsharif.com/downloads/humood/kun-anta.mp3"},
          {"name": "The Beauty Of Existence", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/the-beauty-of-existence.mp3"},
          {"name": "Allahu Allahhu", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/allahu-allahhu.mp3"},
          {"name": "The Way Of The Tears", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/the-way-of-the-tears.mp3"},
          {"name": "Ujri Manzalain", "source": "https://files.thenaatsharif.com/downloads/hafiz-m-jalabeeb/ujri-manzalain.mp3"},
          {"name": "My Hope Is On You", "source": "https://files.thenaatsharif.com/downloads/muhammad-al-muqit/my-hope-is-on-you.mp3"},
          {"name": "Ya Adheeman", "source": "https://files.thenaatsharif.com/downloads/ahmed-bukhatir/ya-adheeman.mp3"},
          {"name": "Balaghal Ula Be Kamalehi", "source": "https://files.thenaatsharif.com/downloads/ali-zafar/balaghal-ula-be-kamalehi.mp3"},
          {"name": "Qamarun Qamarun", "source": "https://files.thenaatsharif.com/downloads/ayisha-abdul-basith/qamarun.mp3"},
          {"name": "Ya Ilahi Karam", "source": "https://files.thenaatsharif.com/downloads/umair-zubair/ya-iLahi-karam.mp3"},
          {"name": "Ya Man Yara", "source": "https://files.thenaatsharif.com/mp3-naat/ahmed-bukhatir/Ya-Man-Yara.mp3"},
          {"name": "Ya Nabi Salam Alayka", "source": "https://files.thenaatsharif.com/downloads/maher-zain/ya-nabi-salam-alayka.mp3"}
          // {
          //   name: "Bloom",
          //   artist: "Dabin, Dia Frampton",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/bloom_dabin.jpeg",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Bloom.mp3",
          //   url: "https://youtu.be/MVvclgDMtps",
          //   favorited: false
          // },
          // {
          //   name: "Channa Mereya - Unplugged",
          //   artist: "Pritam, Arijit Singh",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/channa_mereya-unplugged.jpg",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Channa_Mereya.mp3",
          //   url: "https://youtu.be/PYzFp5o4lhE",
          //   favorited: true
          // },
          // {
          //   name: "Falling",
          //   artist: "Trever Daniel",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/falling.png",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Falling.mp3",
          //   url: "https://youtu.be/L7mfjvdnPno",
          //   favorited: false
          // },
          // {
          //   name: "Kun Faya Kun",
          //   artist: "A.R. Rahman",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/kun_faya_kun.jpeg",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Kun_Faya_Kun.mp3",
          //   url: "https://youtu.be/T94PHkuydcw",
          //   favorited: true
          // },
          // {
          //   name: "Love Is Gone - Acoustic",
          //   artist: "SLANDER",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/love_is_gone-acoustic.jpeg",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Love_Is_Gone.mp3",
          //   url: "https://youtu.be/hCrtcVDgCGw",
          //   favorited: true
          // },
          // {
          //   name: "Pehli Dafa",
          //   artist: "Atif Aslam",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/pehli_dafa.jpeg",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/music/Pehli_Dafa.mp3",
          //   url: "https://youtu.be/SxTYjptEzZs",
          //   favorited: false
          // },
          // {
          //   name: "Saansein",
          //   artist: "Prateek Kuhad",
          //   cover: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets/img/saansein.jpg",
          //   source: "https://raw.githubusercontent.com/hafizmp/Music-Application/master/Assets//music/Saansein.mp3",
          //   url: "https://youtu.be/R3Ed4zvQ0Hs",
          //   favorited: false
          // }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });