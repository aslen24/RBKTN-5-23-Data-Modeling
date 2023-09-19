function makeBook(t,a,m,g,np,d){
    return {Title:t,Author:a,MSRP:m,Genre:g,NumbreOfPage:np,Description:d}    
   }
   var book1=makeBook("Harry Potterand the Sorcerer's Stone","J.K.Rowling "," ","fantasy",100,"hdhdhgdg");
   var book2=makeBook("Romeo and Juliet ","William Shakespeare ","24$","fantasy",150,"hfhfhfh");
   function displayBook(b) {
    return b.Title+" by"+b.Author+" "+b.Genre+" ,"+b.MSRP
}

var books=[book1,book2];
function displayBooks(b) {
    for (let i = 0; i < b.length; i++) {
        console.log((i+1)+" . "+displayBook(b[i]))
    }
}
function searchBooks(q,b) {
    for (let i = 0; i < b.length; i++) {
          if (isMatch(q,b[i].Title)===true) {
           return displayBook(b[i])
        }
    }
      return false
    }
    function isMatch(q,str) {
        var t=str.toLowerCase()
        var c=q.toLowerCase()
        if (t.indexOf(c)<0) {return false      
        }else 
        return true
    }
    function removeBook(b,t) {
        for (let i = i; i < b.length; i++) {
                if (b[i].Title===t) {
                t.splice(i,1)
                return t+" removed"
            }
        } return t+" was'it there"
    } 
    //MORE PRACTISE 
    function makeMovie(Title,Director,Duration,ReleaseDate ,Act) {
        return {Title:Title,
                Director:Director,
                Duration:Duration,
                ReleaseDate:ReleaseDate,
                Act:Act}
        
    }var m1=makeMovie("breaking bad","flan","2h","10/10/2022","act1 act2")
    var m2=makeMovie("superman","foulan","1h30m","10/06/2023","act4 act3")
var m3=makeMovie("spiderman","foulan","1h30m","14/01/2023","act5 act6")
var m4=makeMovie("twilit","foulan","2h30m","12/05/2023","act8 act7")
var m5=makeMovie("choufli hal","foulan","3h","10/08/2023","act9 act13")
function displymovie(m) {
    return m.Title+" by"+m.Director
}
var movies=[m1,m2,m3,m4,m5]

function displayMovies(ms) {
    for (let i = 0; i < ms.length; i++) {
        console.log((i+1)+" . "+displymovie(ms[i]))
    }
}
function calculAverage(ms) {
    var s=0; 
    for (let i = 0; i < ms.length; i++) {
        s+=sumT(ms[i].Duration)
    }return s 
 }
