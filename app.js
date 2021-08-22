const quiz = [
    {
        question: 'Q1:次の鉛筆の芯の硬さの内、一番濃い色が出るのはどれ？',
        answers: [
            '9H',
            '6B',
            '2B',
            'HB'
        ],
        correct: '6B'
    }, {
        question: 'Q2:鉛筆が生まれた国は次のうち、どれ？',
        answers: [
            'イタリア',
            '日本',
            'イギリス',
            'ドイツ'
        ],
        correct: 'イギリス'
    }, {
        question: 'Q3:次のカラーコードの内、白を表すのは？',
        answers: [
            '#000000',
            '#b8d200',
            '#00aed1',
            '#ffffff'
        ],
        correct: '#ffffff'
    }, {
        question: 'Q4:B5の企画寸法は次の内、どれ？',
        answers: [
            '148×210mm',
            '257×364mm',
            '210×297mm',
            '182×257mm'
        ],
        correct: '182×257mm'
    }, {
        question: 'Q5:消しゴムに使用されている原料は下記の4択の内、どれ？',
        answers: [
            'アルミ',
            '天然ゴム',
            'チタン',
            'マグネシウム'
        ],
        correct: '天然ゴム'
    }, {
        question: 'Q6:固形のりを英語でなんという？',
        answers: [
            'Glue',
            'LiquidGlue',
            'GlueStick',
            'Oh! KokeiNori!!'
        ],
        correct: 'GlueStick'
    }, {
        question: 'Q7:水性ボールペンのインク原料として正しい組み合わせはどれ？',
        answers: [
            '顔料(一部染料)、水、添加剤',
            'アルコール系溶剤、樹脂、添加剤',
            '染料(一部顔料)、アルコール系溶剤、樹脂、添加剤',
            '樹脂、水'
        ],
        correct: 'キ顔料(一部染料)、水、添加剤'
    }, {
        question: 'Q8:洋紙の単位で一連は何枚?',
        answers: [
            '10枚',
            '100枚',
            '1000枚',
            '10000枚'
        ],
        correct: '1000枚'
    }, {
        question: 'Q9:印刷の四現職の内、CMYKの内、Kはなんの略称？',
        answers: [
            'Key',
            'Black',
            'KURO',
            'Key Plate'
        ],
        correct: 'Key Plate'
    }, {
        question: 'Q10:JIS規格で定める鉛筆の硬さは種類？',
        answers: [
            '17種類',
            '12種類',
            '18種類',
            '24種類'
        ],
        correct: '17種類'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//HTMLのオブジェクトを取得する時は、$を使用するのが主流。
//分かりやすくする為。
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        const music = new Audio('/wav/1kgmr-n2omo.wav');
        music.play();
        score++;
    }else{
        window.alert('不正解！\n正解は' + quiz[quizIndex].correct +'です！');
        const music = new Audio('/wav/8o5m1-rhs2n.wav');
        music.play();
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題が残っている時はこちらを実行
        setupQuiz();
    }else {
        //問題を解き終わったらこちらを実行
        window.alert('ハンター試験終了！あなたの正解数は' + score + '/' + quizLength + 'です！\n8/10以上でハンター試験合格です！');
    }

};

//ボタンをクリックした時に正誤判定させる
//e=eventの事。taget=クリックされたボタンを指している。
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
