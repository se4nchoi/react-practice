import '../assets/css/Head.css'

export default function Head () {
    return (
        <section className='head'>
            <div className='profile-pic'></div>
            <div className='profile-text'>
                <h1 className='name'>Sean (Yehyun) Choi</h1>
                <p className='title'>Frontend Developer</p>
                <p className='website'><a href='https://yehyunchoi.github.io' target="_blank" rel="noopener noreferrer">yehyunchoi.github.io</a></p>
            </div>
            <div className='btn-wrapper'>
                <button className='btn-email'>
                    <i className='fas fa-envelope'></i>Email
                </button>
            </div>
        </section>
    )
}