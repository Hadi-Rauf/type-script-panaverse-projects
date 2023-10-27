class Person {
	private personality: string

	public constructor() {
		this.personality = 'Mystery'
	}

	public AskQuestion(answer: string): void {
		if (answer === 'Talk to others') {
			this.personality = 'Extrovert'
		} else if (answer === 'Rather keep to yourself') {
			this.personality = 'Introvert'
		} else {
			this.personality = 'Mystery'
		}
	}

	public get GetPersonality(): string {
		return this.personality
	}
}

export default Person
