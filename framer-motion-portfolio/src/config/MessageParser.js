class MessageParser {
    constructor(actionProvider){
        this.actionProvider = actionProvider;
    }
    paese(message){
        const lower = message.toLowerCase();

        if(lower.includes("hello") || lower.includes("hi")){
            this.actionProvider.greet();
        }

        if(lower.includes("projects") || lower.includes("work")){
            this.actionProvider.showProjects();
        }
    }

} 

export default MessageParser;