import img1 from '../images/collage.png';
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img6.jpg'
import './AnimeHome.css';
const AnimeHome = () => {
    return (
        <div>

            <div class='fcontainer' id="mydiv2" >
                <div className='row'>
                    <div class='fchild' className='col-sm-12 col-md-6 col-lg-9' id="text">
                        <p>
                            The word anime — pronounced "ah-knee-may" — is an abbreviation of the word animation.
                            In Japan, the word is used to refer to all animation.
                            However, outside of Japan, it has become the catch-all term for animation from Japan.

                            For decades, anime was produced by and for Japan — a local product, with a distinct look-and-feel to not just the artwork but the storytelling, the themes, and the concepts.
                            Over the last forty years, it has become an international phenomenon, attracting millions of fans and being translated into many languages.
                            A whole generation of viewers in the West has grown up with it and are now passing it on to their own children.
                        </p>
                    </div>
                    <div class='fchild' align="right" className='col-sm-12 col-md-6 col-lg-3' id="img">
                        {/* <div id='div2' class="col-sm-12 col-md-8 col-lg-6"> */}
                        <img src={img1} className="img1" alt="img1" id='img1' />
                        {/* </div> */}

                    </div>
                </div>
                <div className="row" id="mydiv3">
                    {/* <div class='fchild1' className='col-sm-12 col-md-6 col-lg-6'>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="button" class="btn btn-primary">Get List</button>
                        </form>
                    </div> */}
                    <div class='fchild1'  className='col-sm-12 col-md-6 col-lg-8'>
                        <p id="upcoming">Upcoming Movies</p>
                        <div className='container'>
                            <div className='row'>
                                <img src={img2} class="img" className='col-sm-12 col-md-6 col-lg-3' alt='image 2' id='img' />
                                <img src={img3} class="img" className='col-sm-12 col-md-6 col-lg-3' alt='image 3' id='img' />
                                <img src={img4} class="img" className='col-sm-12 col-md-6 col-lg-3' alt='image 4' id='img' />
                                <img src={img5} class="img" className='col-sm-12 col-md-6 col-lg-3' alt='image 4' id='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AnimeHome;