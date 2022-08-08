export const truncateBlogTitle = (str, length) => {
  let ending = "..."
  if (length == null) {
    length = 45
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}

export const normalizeMarkdownText = (text) =>
  text.substr(0, 200).replace(/[^a-zA-Z ]/g, " ")
