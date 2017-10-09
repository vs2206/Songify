 $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	
/*	function togglesong()
	{
	    var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
    
	}
	*/
	
	
 function togglesong()    //togglesong is a function.We use fn where we use same code many tym so where we want same code we  just call function not write whole code again eg:coffee maker or washingmachine  
		{
			var song = document.querySelector('audio');
				if (song.paused == true)
					{
						console.log('Playing');
						$('.play-icon').removeClass('fa-play').addClass('fa-pause');
						song.play();
					} 
				else
					{
						console.log('Pausing');
						$('.play-icon').removeClass('fa-pause').addClass('fa-play');
						song.pause();
					}
		}
		
	
	
    $('.play-icon').on('click', function() {
	togglesong();
    });
	
    $('body').on('keypress', function(event) {
		var target=event.target;
		
                if (event.keyCode == 32  && target.tagName!="INPUT") {
                togglesong();
				
				}
            });
			
			
function updateCurrentTime()
{

var song=document.querySelector("audio");
var currentTime= Math.floor (song.currentTime);
currentTime=fancyTimeFormat(currentTime);

var duration=  Math.floor(song.duration);
duration=fancyTimeFormat(duration);
$(".time-elapsed").text(currentTime);
$(".song-duration").text(duration);

}		


function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;	
	}
 var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
	   'image':'song1.jpg'    
    },
  {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
		'image':'song2.jpg'   
    },
	{
	'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
		'image':'song3.jpg'
		},
		
	{
		
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
		'image':'song4.jpg'
		}];
	
	
	
function addSongNameClickEvent(songObj,position)
{	
var songName=songObj.fileName;
var id=  "#song" +position;
	$(id).click(function(){
	var audio=document.querySelector("audio");
 var currentSong=audio.src;
	if( currentSong.search (songName)!=-1)
	{
	togglesong();
	}
	else
	{
	audio.src=songName;
	togglesong();
	changeCurrentNameDetails(songObj);
	}
	
	});	
}
	
	
	function changeCurrentNameDetails(songObj){
		$('.current-song-image').attr('src','img/'+ songObj.image);
		$('.current-song-name').text (songObj.name);
		$('.current-song-album').text(songObj.album);
	}

	
	window.onload=function(){
		
		changeCurrentNameDetails(songs[0])
		for(var i=0;i< songs.length ;i++)
	{
		var obj=songs[i];
	 var name=	"#song"+ (i+1);
		var song=$(name);
		
		
	  song.find (".song-name").text(obj.name);
	song.find (".song-artist").text(obj.artist);
	song.find(".song-album").text(obj.album);	
	song.find(".song-length").text(obj.duration);
addSongNameClickEvent(obj,i+1)


	}
	/*
	 for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj.fileName,i+1)
    }
	*/
	
	$('#songs').DataTable({
		paging:false
	});
	
	

	updateCurrentTime();
		setInterval(function(){
		updateCurrentTime();
			},1000);
			
			}