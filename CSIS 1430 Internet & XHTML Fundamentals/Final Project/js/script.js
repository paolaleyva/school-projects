
// Drop down menu 
document.addEventListener('DOMContentLoaded', function() {
    var dropdownMenuList = document.querySelectorAll('.dropdown-menu');
    var dropdownToggleList = document.querySelectorAll('.dropdown-toggle');

    dropdownToggleList.forEach(function(dropdownToggle, index) {
        dropdownToggle.addEventListener('click', function() {
            var dropdownMenu = dropdownMenuList[index];
            dropdownMenu.classList.toggle('show');
        });
    });
});

// header continous animation

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setInterval(() => {
    setTimeout(() => {
      text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "Blogger";
    }, 3000);
    setTimeout(() => {
      text.textContent = "YouTuber";
    }, 6000);
  }, 9000);
};

textLoad();

// quote generator 

// Create an array of quotes
const arrayOfQuotes = [
  {'author': 'Nelson Mandela', 
      'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
  },
  {'author': 'Walt Disney', 
      'quote': 'The way to get started is to quit talking and begin doing.'
  },
  {'author': 'Eleanor Roosevelt', 
      'quote': 'If life were predictable it would cease to be life, and be without flavor.'
  },
  {'author': 'Oprah Winfrey', 
      'quote': 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough'
  },
  {'author': 'James Cameron', 
      'quote': 'If you set your goals ridiculously high and it`s a failure, you will fail above everyone else`s success'
  },
  {'author': 'Elbert Hubbard', 
      'quote': 'Do not take life too seriously. You will not get out alive.'
  },
  {'author': 'John Lennon', 
      'quote': 'Life is what happens when you`re busy making other plans.'
  }
];
// Create a function to generate quote from array
function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  document.querySelector("#generatedQuote")
  .textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector("#AuthorName")
  .textContent = `--${arrayOfQuotes[random].author}`;

   // Play sound
   const audio = document.querySelector("#btnAudio");
   audio.currentTime = 0; // Reset the audio to the beginning
   audio.play();
}


