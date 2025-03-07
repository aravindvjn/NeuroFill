'use server'
import xss from "xss"

export const createResume = async (title: string) => {

    title = xss(title)

    if (title.length < 3 || title.length > 30) {
        return { success: false, message: "Title must be 3 to 20 characters long" }
    }
    const id = "989893y8yyuigi"

    return { success: true, id }
}