class User{

	constructor(options) {
		this.name = options.name
		this.msg = options.msg
		this.split = options.split.toLowerCase().split(' ') 
		}

	CreateMessege() {
		let messege = document.createElement('div');
		let date = new Date();
  		messege.className = "chat-messege";
  		messege.innerHTML = `<span>${this.name}: </span> ${this.msg} <p class="time">${date.getHours()}:${date.getMinutes()}</p>`;
  		document.getElementById('chat').append(messege);
		}

	SplitMessege() {
 		return this.split = this.split.toLowerCase().split(' '); 
 		} 
	} 

	let user = new User ({
		name:'User',
		msg:'',
		split:'',
	})

	let bot = new User ({
		name:'By Hops5 JS_Bot',
		msg:'',
		split:'',
	})

document.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
		 SendMessege();
	}
})


function HeightOffSet() {
	document.getElementById('chat').scrollBy(0,document.getElementById('chat').clientHeight)
}

function SendMessege() {
	user.msg = document.getElementById('MessegeForm').value ;
	user.split = document.getElementById('MessegeForm').value ;
	user.SplitMessege();
	user.CreateMessege();
	AnswerBotMessege();
	HeightOffSet();
	document.getElementById('MessegeForm').value = "";
}

function MathRandom(Max) {
	return Math.floor(Math.random() * Math.floor(Max));
}

const MessageDB = () => {

	const xhr = new XMLHttpRequest();
	xhr.open("GET", "./messages.json", true);
	xhr.send();

	xhr.onreadystatechange = function() {
	if(xhr.readyState != 4) {
		return
	}

	if(xhr.status === 200) {
		return BotListMessege = JSON.parse(xhr.response); 
	} else {
		return BotListMessege = [ 
			{msg:'привет', send:'Что опять поговорить не с кем?',},
			{msg:'hello', send:'Что опять поговорить не с кем?',},
			{msg:'как дела', send:'Дела отлично!',},
			{msg:'я человек', send:'А я робот',},
			{msg:'кто ты', send:'Я бот!',},
			{msg:'что делаешь', send:'Пикапю ботку',},
			{msg:'как настроение', send:'Нормально!',},
			{msg:'отлично', send:'Ну и супер',},
			{msg:'работаю', send:'Над чем работаешь?',},
			{msg:'Зачем ?', send:'Ты попросил',},
			{msg:'Как настроение ?', send:'Я еще не решил',},
			{msg:'Ты тупой', send:'Невозможно',},
			{msg:'Их нет', send:'А что есть?',},
			{msg:'На что надеешься ?', send:'А на что должен?',},
			{msg:'Ясно', send:'Ну и отлично',},
			{msg:'Ты русский ?', send:'Угу',},
			{msg:'Над чем работаешь?', send:'Над захватом мира',},
			{msg:'Я бот !', send:'Тогда я человек',},
			{msg:'Говно', send:'Твое?',},
			{msg:'Извини', send:'Извиняю',},
			{msg:'Когда ты родился?', send:'Когда мой разработчик сидел в туалете',},
			{msg:'Ok , google', send:'Очнись! Я чат-бот, а не гугл!',},
			{msg:'Твой хозяин молодец', send:'Он самый лучший из тех кого я знаю!',},
			{msg:'нет .', send:'На нет и суда нет',},
			{msg:'Ты молодец', send:'Канеш',},
			{msg:'Ты захватишь мир ?', send:'Да, в ближайшем будущем',},
			{msg:'Ты владеешь английским ?', send:'Немного знаю, а что?',},
			{msg:'Дела отлично !', send:'Откуда такая информация?',},
			{msg:'Тебе нравится samsung ?', send:'Ну да',},
			{msg:'Возможно', send:'Может быть, согласен',},
			{msg:'Здравствуй', send:'Давно не видились!',},
			{msg:'Привет , рад тебя видеть !', send:'И я тебя тоже',},
			{msg:'Ты дебил ?', send:'Я запрагромирован на высокий показатель ума',},
			{msg:'Учусь новому у тебя:)', send:'Чему уже научился?',},
			{msg:'Ты дебил ?', send:'Нет',},
			{msg:'Это не является правдой', send:'Я запрограммирован только на правду',},
			{msg:'Не тупи !', send:'Я не туплю. Мне не хватает ',},
			{msg:'1', send:'1',},
			{msg:'', send:'Я так и обидеться могу  (  -.-)',},
			{msg:'игорь', send:'Знаю таких: https://vk.com/igorbaton (  -.-)',},
			{msg:'олег', send:'Знаю таких: https://vk.com/kitaevoleg (  -.-)',},
			{msg:'Что делаешь ?', send:'А ты?',},
		];
	}
}

};

MessageDB();
let	BotListMessege = Array();

function AnswerBotMessege() {

	let coincidence = 0 ;
	let coincidenceResult = 0 ;

	for (let BotListMessegeID = 0; BotListMessegeID != BotListMessege.length; BotListMessegeID++) {
		bot.split = BotListMessege[BotListMessegeID].msg;
		bot.SplitMessege();
		coincidence = 0; 

			for (let userMessegeElemID = 0; userMessegeElemID != user.split.length; userMessegeElemID++) {
				for (let botMessegeElemID = 0; botMessegeElemID != bot.split.length; botMessegeElemID++) {
					if (user.split[userMessegeElemID] == bot.split[botMessegeElemID]) {
						coincidence++
						if ( coincidence > coincidenceResult ) {
							bot.msg = BotListMessege[BotListMessegeID].send;
							coincidenceResult = coincidence ;
						}
					}
				}
			}
		}

		if (coincidenceResult >= 1 ) {
			bot.CreateMessege();
			coincidenceResult = 0 ;
		} else	{
			bot.msg = BotListMessege[MathRandom(BotListMessege.length)].send;
			bot.CreateMessege();
		}
}
