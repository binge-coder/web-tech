const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) 
{
  if (node.nodeType === Node.TEXT_NODE) 
  {
    const text = node.textContent;
    let transformedText = text;
    const keys = Object.keys(MATCH_LIST);
    let textArray = transformedText.split(" ");
    for(let i = 0; i < textArray.length; i++)
    {
      // const match = word.match(/\b(there|their|they're|There|Their|They're|THERE|THEIR|THEY'RE)([.,])?/); // regex match for words with optional punctuation
      const word = textArray[i];
      const match = word.match(/\b(there|their|they're)([.,])?/i); // regex match for words with optional punctuation
      if (match && match[1] in MATCH_LIST) 
      {
        const punctuation = match[2] || ''; // get the punctuation (or an empty string if there's no punctuation)
        textArray[i] = MATCH_LIST[match[1]] + punctuation; // replace the word with its corresponding value and add back the punctuation
      }

    }
    // transformedText = textArray.toString();
    transformedText = textArray.join(" ") // using join is better
    if (transformedText !== text) {
      node.textContent = transformedText;
    }
  }
  else 
  {
    for (const childNode of node.childNodes) {
      transformTextNodes(childNode);
    }
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
