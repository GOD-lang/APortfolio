import { motion } from 'framer-motion';

export default function ASR() {
    return(
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
            <h1 className="text-3xl pb-6 font-gloock">Automated Speech Recognition</h1>
            <div className="lg:pl-5 lg:-ml-3 lg:border-4 lg:border-l-black lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:dark:border-l-champagne">
                <p className="font-sans leading-2 ">
                Automated Speech Recognition (ASR) refers to the technology that converts spoken language into written text. In the context of using Selenium and Python, you can build an ASR automation script to interact with web applications using voice commands. Selenium is a powerful tool for automating web browsers, and Python provides a versatile and easy-to-use programming language for such tasks.
                 I used <span className="font-extrabold">Python</span>, <span className="font-extrabold">Selenium</span>, and
                <span className="font-extrabold pl-1">GPT</span>.
                </p>
                <div className="pt-4">
                    <a 
                    className="underline font-gloock pr-2"
                    href="https://github.com/GOD-lang/ASR" target="_blank" rel="noreferrer">View Site</a>|
                    <a 
                    className="underline font-gloock pl-2"
                    href="https://github.com/GOD-lang/ASR" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
       
        </motion.div>
    );
}

