/* =================================
   FarmXT Chatbot
   Updated from existing FarmXT code
================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CREATE CHATBOT HTML
       ===================================================== */

    const chatbotHTML = `

        <!-- ==============================
             CHATBOT FLOATING BUTTON
        =============================== -->

        <button
            id="farmxtChatbotButton"
            class="farmxt-chatbot-button"
            aria-label="Open FarmXT Assistant">

            🤖

        </button>


        <!-- ==============================
             CHATBOT WINDOW
        =============================== -->

        <div
            id="farmxtChatbotWindow"
            class="farmxt-chatbot-window">


            <!-- ==============================
                 HEADER
            =============================== -->

            <div class="farmxt-chatbot-header">


                <!-- LEFT SIDE -->

                <div class="farmxt-chatbot-title">

                    <span class="farmxt-chatbot-title-icon">
                        🤖
                    </span>

                    <div>

                        <h3>
                            FarmXT<br>
                            Assistant
                        </h3>

                        <div class="farmxt-chatbot-status">
                            Online
                        </div>

                    </div>

                </div>


                <!-- RIGHT SIDE -->

                <div class="farmxt-chatbot-header-actions">


                    <!-- LANGUAGE -->

                    <select
                        id="farmxtChatbotLanguage"
                        class="farmxt-chatbot-language"
                        title="Select language">

                        <option value="en-US">
                            English
                        </option>

                        <option value="te-IN">
                            తెలుగు
                        </option>

                        <option value="hi-IN">
                            हिन्दी
                        </option>

                        <option value="ta-IN">
                            தமிழ்
                        </option>

                        <option value="kn-IN">
                            ಕನ್ನಡ
                        </option>

                    </select>


                    <!-- CLEAR -->

                    <button
                        id="farmxtChatbotClear"
                        class="farmxt-chatbot-clear"
                        title="Clear chat"
                        aria-label="Clear chat">

                        🗑

                    </button>


                    <!-- CLOSE -->

                    <button
                        id="farmxtChatbotClose"
                        class="farmxt-chatbot-close"
                        aria-label="Close chatbot"
                        title="Close">

                        ×

                    </button>


                </div>

            </div>


            <!-- ==============================
                 CHAT MESSAGES
            =============================== -->

            <div
                id="farmxtChatbotMessages"
                class="farmxt-chatbot-messages">


                <!-- Welcome -->

                <div class="farmxt-chatbot-welcome">

                    <div>
                        🤖 Welcome to FarmXT Assistant
                    </div>

                    <div class="farmxt-welcome-question">
                        Ask your question below.
                    </div>

                </div>


            </div>


            <!-- ==============================
                 TYPING INDICATOR
            =============================== -->

            <div
                id="farmxtChatbotTyping"
                class="farmxt-typing">

                <span></span>
                <span></span>
                <span></span>

            </div>


            <!-- ==============================
                 HIDDEN IMAGE INPUT
            =============================== -->

            <input
                type="file"
                id="farmxtChatbotImageInput"
                accept="image/*"
                capture="environment"
                hidden>


            <!-- ==============================
                 INPUT AREA
            =============================== -->

            <div class="farmxt-chatbot-input-area">


                <!-- MICROPHONE -->

                <button
                    id="farmxtChatbotMic"
                    class="farmxt-chatbot-tool"
                    title="Voice input"
                    aria-label="Voice input">

                    🎤

                </button>


                <!-- CAMERA / IMAGE -->

                <button
                    id="farmxtChatbotCamera"
                    class="farmxt-chatbot-tool"
                    title="Upload image"
                    aria-label="Upload image">

                    📷

                </button>


                <!-- TEXT -->

                <input
                    type="text"
                    id="farmxtChatbotInput"
                    class="farmxt-chatbot-input"
                    placeholder="Ask anything..."
                    maxlength="500"
                    autocomplete="off">


                <!-- SEND -->

                <button
                    id="farmxtChatbotSend"
                    class="farmxt-chatbot-send"
                    aria-label="Send message"
                    title="Send">

                    ➤

                </button>


            </div>


        </div>

    `;


    /* =====================================================
       INSERT CHATBOT INTO PAGE
       ===================================================== */

    document.body.insertAdjacentHTML(
        "beforeend",
        chatbotHTML
    );


    /* =====================================================
       GET ELEMENTS
       ===================================================== */

    const chatbotButton =
        document.getElementById(
            "farmxtChatbotButton"
        );


    const chatbotWindow =
        document.getElementById(
            "farmxtChatbotWindow"
        );


    const chatbotClose =
        document.getElementById(
            "farmxtChatbotClose"
        );


    const chatbotClear =
        document.getElementById(
            "farmxtChatbotClear"
        );


    const chatbotInput =
        document.getElementById(
            "farmxtChatbotInput"
        );


    const chatbotSend =
        document.getElementById(
            "farmxtChatbotSend"
        );


    const chatbotMessages =
        document.getElementById(
            "farmxtChatbotMessages"
        );


    const chatbotTyping =
        document.getElementById(
            "farmxtChatbotTyping"
        );


    const chatbotMic =
        document.getElementById(
            "farmxtChatbotMic"
        );


    const chatbotCamera =
        document.getElementById(
            "farmxtChatbotCamera"
        );


    const chatbotImageInput =
        document.getElementById(
            "farmxtChatbotImageInput"
        );


    const chatbotLanguage =
        document.getElementById(
            "farmxtChatbotLanguage"
        );


    /* =====================================================
       OPEN CHATBOT
       ===================================================== */

    chatbotButton.addEventListener(
        "click",
        function () {

            chatbotWindow.style.display =
                "flex";

            chatbotButton.style.display =
                "none";

            chatbotInput.focus();

        }
    );


    /* =====================================================
       CLOSE CHATBOT
       ===================================================== */

    chatbotClose.addEventListener(
        "click",
        function () {

            chatbotWindow.style.display =
                "none";

            chatbotButton.style.display =
                "block";

        }
    );


    /* =====================================================
       CURRENT TIME
       ===================================================== */

    function getCurrentTime() {

        return new Date().toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    }


    /* =====================================================
       SCROLL TO BOTTOM
       ===================================================== */

    function scrollToBottom() {

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    /* =====================================================
       ADD USER MESSAGE
       ===================================================== */

    function addUserMessage(message) {

        const messageWrapper =
            document.createElement("div");

        messageWrapper.className =
            "farmxt-user-wrapper";


        const messageElement =
            document.createElement("div");

        messageElement.className =
            "farmxt-message farmxt-user-message";

        messageElement.textContent =
            message;


        const timeElement =
            document.createElement("span");

        timeElement.className =
            "farmxt-message-time";

        timeElement.textContent =
            getCurrentTime();


        messageWrapper.appendChild(
            messageElement
        );


        messageWrapper.appendChild(
            timeElement
        );


        chatbotMessages.appendChild(
            messageWrapper
        );


        scrollToBottom();

    }


    /* =====================================================
       ADD BOT MESSAGE
       ===================================================== */

    function addBotMessage(message) {

        const messageWrapper =
            document.createElement("div");

        messageWrapper.className =
            "farmxt-bot-wrapper";


        const messageElement =
            document.createElement("div");

        messageElement.className =
            "farmxt-message farmxt-bot-message";

        messageElement.textContent =
            message;


        const timeElement =
            document.createElement("span");

        timeElement.className =
            "farmxt-message-time";

        timeElement.textContent =
            getCurrentTime();


        messageWrapper.appendChild(
            messageElement
        );


        messageWrapper.appendChild(
            timeElement
        );


        chatbotMessages.appendChild(
            messageWrapper
        );


        scrollToBottom();

    }


    /* =====================================================
       SHOW TYPING
       ===================================================== */

    function showTypingIndicator() {

        chatbotTyping.style.display =
            "flex";

        scrollToBottom();

    }


    /* =====================================================
       HIDE TYPING
       ===================================================== */

    function hideTypingIndicator() {

        chatbotTyping.style.display =
            "none";

    }


    /* =====================================================
       SEND MESSAGE
       ===================================================== */

    function sendMessage() {

        const message =
            chatbotInput.value.trim();


        if (message === "") {

            return;

        }


        /* Display user message */

        addUserMessage(
            message
        );


        /* Clear input */

        chatbotInput.value = "";


        /* Show typing */

        showTypingIndicator();


        /* =========================================
           BACKEND / AI CONNECTION

           Add your backend API here later.
        ========================================= */


        /*
        Example:

        fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({

                message: message,

                language:
                    chatbotLanguage.value

            })

        })
        */


        /* Temporary response */

        setTimeout(
            function () {

                hideTypingIndicator();

                addBotMessage(
                    "Thank you for your question. " +
                    "FarmXT Assistant is ready to help."
                );

            },
            1000
        );

    }


    /* =====================================================
       SEND BUTTON
       ===================================================== */

    chatbotSend.addEventListener(
        "click",
        sendMessage
    );


    /* =====================================================
       ENTER KEY
       ===================================================== */

    chatbotInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();

            }

        }
    );


    /* =====================================================
       CLEAR CHAT
       ===================================================== */

    chatbotClear.addEventListener(
        "click",
        function () {

            chatbotMessages.innerHTML = `

                <div class="farmxt-chatbot-welcome">

                    <div>
                        🤖 Welcome to FarmXT Assistant
                    </div>

                    <div class="farmxt-welcome-question">
                        Ask your question below.
                    </div>

                </div>

            `;

        }
    );


    /* =====================================================
       IMAGE / CAMERA BUTTON
       ===================================================== */

    chatbotCamera.addEventListener(
        "click",
        function () {

            chatbotImageInput.click();

        }
    );


    /* =====================================================
       IMAGE SELECTED
       ===================================================== */

    chatbotImageInput.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];


            if (!file) {

                return;

            }


            if (!file.type.startsWith("image/")) {

                alert(
                    "Please select an image file."
                );

                return;

            }


            addUserImage(file);


            /* Reset */

            this.value = "";

        }
    );


    /* =====================================================
       DISPLAY IMAGE
    ===================================================== */

    function addUserImage(file) {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "farmxt-user-wrapper";


        const image =
            document.createElement("img");

        image.className =
            "farmxt-user-image";

        image.alt =
            "Uploaded image";


        const timeElement =
            document.createElement("span");

        timeElement.className =
            "farmxt-message-time";

        timeElement.textContent =
            getCurrentTime();


        const reader =
            new FileReader();


        reader.onload =
            function (event) {

                image.src =
                    event.target.result;

            };


        reader.readAsDataURL(file);


        wrapper.appendChild(
            image
        );


        wrapper.appendChild(
            timeElement
        );


        chatbotMessages.appendChild(
            wrapper
        );


        scrollToBottom();

    }


    /* =====================================================
       MICROPHONE / VOICE INPUT
       ===================================================== */

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    let recognition = null;


    if (SpeechRecognition) {

        recognition =
            new SpeechRecognition();


        recognition.continuous =
            false;


        recognition.interimResults =
            false;


        recognition.lang =
            chatbotLanguage.value;


        /* Recording started */

        recognition.onstart =
            function () {

                chatbotMic.classList.add(
                    "recording"
                );

            };


        /* Speech received */

        recognition.onresult =
            function (event) {

                const transcript =
                    event.results[0][0]
                        .transcript;


                chatbotInput.value =
                    (
                        chatbotInput.value +
                        " " +
                        transcript
                    ).trim();


                chatbotInput.focus();

            };


        /* Error */

        recognition.onerror =
            function () {

                chatbotMic.classList.remove(
                    "recording"
                );

            };


        /* Recording finished */

        recognition.onend =
            function () {

                chatbotMic.classList.remove(
                    "recording"
                );

            };


        /* Start microphone */

        chatbotMic.addEventListener(
            "click",
            function () {

                recognition.lang =
                    chatbotLanguage.value;


                try {

                    recognition.start();

                }

                catch (error) {

                    console.log(
                        "Speech recognition already running."
                    );

                }

            }
        );

    }

    else {

        chatbotMic.addEventListener(
            "click",
            function () {

                alert(
                    "Voice input is not supported " +
                    "in this browser. Please use " +
                    "Google Chrome or Microsoft Edge."
                );

            }
        );

    }


    /* =====================================================
       LANGUAGE SELECTOR
       ===================================================== */

    chatbotLanguage.addEventListener(
        "change",
        function () {

            const language =
                chatbotLanguage.value;


            const placeholders = {

                "en-US":
                    "Ask anything...",

                "te-IN":
                    "ఏదైనా అడగండి...",

                "hi-IN":
                    "कुछ भी पूछें...",

                "ta-IN":
                    "எதையும் கேளுங்கள்...",

                "kn-IN":
                    "ಏನಾದರೂ ಕೇಳಿ..."

            };


            chatbotInput.placeholder =
                placeholders[language] ||
                "Ask anything...";


            /* Change voice recognition language */

            if (recognition) {

                recognition.lang =
                    language;

            }

        }
    );

});
