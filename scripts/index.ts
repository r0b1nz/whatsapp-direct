;(function () {
    const mobileErrorElement = document.getElementById(
        'mobile-error',
    ) as HTMLElement
    const countryCodeInput = document.getElementById(
        'country_code',
    ) as HTMLInputElement
    const mobileNumberInput = document.getElementById(
        'mobile_number',
    ) as HTMLInputElement
    const isDesktop = !navigator.userAgent.match(/(android|iphone|ipad)/gi)
    const qrWrapperContainer =
        isDesktop && document.getElementById('qr-wrapper')
    let currentCountryCode: string
    countryCodeInput.addEventListener('focus', () => {
        currentCountryCode = countryCodeInput.value
        mobileErrorElement.innerText = ''
        qrWrapperContainer && qrWrapperContainer.classList.add('hide')
    })
    countryCodeInput.addEventListener('blur', () => {
        if (!countryCodeInput.value) {
            countryCodeInput.value = currentCountryCode
        }
    })
    mobileNumberInput.addEventListener('focus', () => {
        mobileErrorElement.innerText = ''
        qrWrapperContainer && qrWrapperContainer.classList.add('hide')
    })
    ;(document.getElementById(
        'start_whatsapp',
    ) as HTMLElement).addEventListener('click', () => {
        const mobileNumber = mobileNumberInput.value
        if (!mobileNumber) {
            return (mobileErrorElement.innerText = 'Mobile number is mandatory')
        }

        // Try to tackle user introduced errors
        // Ignore +91 and 91 if present again in the Mobile number input
        const validatedNumber = (+mobileNumber.replace(/\D/g, '')).toString();
        let filteredNumber = validatedNumber;
        if (validatedNumber.length > 11 ) {
            if (validatedNumber.length == 12 && validatedNumber.startsWith('91')) {
                filteredNumber = validatedNumber.substr(2);
            } else if (validatedNumber.length == 13 && validatedNumber.startsWith('+91')) {
                filteredNumber = validatedNumber.substr(3);
            }
        }
        const filteredCountryCode = +countryCodeInput.value.replace(/\D/g, '')
        if (!filteredNumber || !filteredCountryCode) {
            return (mobileErrorElement.innerText = `Provide valid ${
                !filteredNumber ? 'mobile number' : 'country code'
            }`)
        }
        const textMessage = encodeURIComponent(
            (document.getElementById('text_message') as HTMLInputElement)
                .value || '',
        )
        const link = `https://wa.me/${filteredCountryCode}${filteredNumber}?text=${textMessage}`
        window.open(link, '_blank')
    })
    ;(document.getElementById(
        'facebook_share',
    ) as HTMLElement).addEventListener('click', () => {
        shareWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href,
            )}&t=${document.title}`,
        )
    })
    ;(document.getElementById('twitter_share') as HTMLElement).addEventListener(
        'click',
        () => {
            shareWindow(
                `https://twitter.com/share?url=${encodeURIComponent(
                    window.location.href,
                )}`,
            )
        },
    )
})()
function shareWindow(url: string) {
    window.open(url, 'sharer', 'toolbar=0,status=0,width=626,height=436')
}
