// UNOCSS
window.__unocss = {
	theme: {
		colors: {
			primaryBlue: "hsl(223, 87%, 63%)",
			secondaryBlue: "hsl(223, 100%, 88%)",
			secondaryRed: "hsl(354, 100%, 66%)",
			neutralGray: "hsl(0, 0%, 59%)",
			neutralBlue: "hsl(209, 33%, 12%)",
		},
		fontFamily: {
			"libre-franklin": "'Libre Franklin', sans-serif",
		},
	},
	shortcuts: {
		"social-media":
			"p-2 text-primary-blue border-1 border-solid border-secondary-blue rounded-full cursor-pointer transition-all hover:bg-primary-blue hover:border-primary-blue hover:text-white",
	},
}

//ALPINE
document.addEventListener("alpine:init", () => {
	Alpine.data("comingSoon", () => ({
		email: "",
		isChecking: false,
		isValidEmail() {
			var regexMail = /\S+@\S+\.\S+/
			return regexMail.test(this.email)
		},
		useSubmit() {
			if (this.isValidEmail()) {
				//RESET STATE
				this.email = ""
				this.isChecking = false
			} else {
				this.isChecking = true
			}
		},
	}))
})
