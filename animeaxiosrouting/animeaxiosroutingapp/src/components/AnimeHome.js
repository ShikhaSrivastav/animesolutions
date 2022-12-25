import img1 from '../images/img1.jpeg'

const AnimeHome=()=>{
return(
    <div>
    <div class="container">
    <div class="row">
        <div id="div1" class="col-sm-6 col-md-8 col-lg-12">
           <p>
           The word anime — pronounced "ah-knee-may" — is an abbreviation of the word animation. 
           In Japan, the word is used to refer to all animation. 
           However, outside of Japan, it has become the catch-all term for animation from Japan.

            For decades, anime was produced by and for Japan — a local product, with a distinct look-and-feel to not just the artwork but the storytelling, the themes, and the concepts. 
            Over the last forty years, it has become an international phenomenon, attracting millions of fans and being translated into many languages.
            A whole generation of viewers in the West has grown up with it and are now passing it on to their own children.
           </p>
        </div>
        <div id='div2' class="col-sm-6 col-md-8 col-lg-12">
            <img src={img1} className="img1" alt="img1" id='img1'/>
        </div>
        </div>
        </div>
    </div>
)

}
export default AnimeHome;