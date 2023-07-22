import './contact.scss'


export const Contact = () => {
  return (
    <div className="contact">
       <h1 className="contact__title">Contact</h1>
       <div className="contact__item">
         <h2>Phone</h2>
           <a className="contact__link" href="tel:+380634755618">+380634755618</a>
         <h2>Email</h2>
           <a className="contact__link" href="mailto:korobkovartstudio@gmail.com">korobkovartstudio@gmail.com</a>
         <h2>Instagram</h2>
           <a 
             className="contact__link"
             href="https://www.instagram.com/korobkov.art/"
             target="_blank"
           >korobkov.art</a>
         <h2>Facebook</h2>
           <a 
             className="contact__link"
             href="https://www.facebook.com/artkorobkov"
             target="_blank"
           >
             korobkov.art
           </a>
       </div>
    </div>
   )
}