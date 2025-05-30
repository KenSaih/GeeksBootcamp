
(function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
    let sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} children.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
})

