const homeText = (data) => {
    return [
        `Hey there! I'm ${data.name}. Welcome to my personal site!`,
        `I'm a fifth-year Software Engineering undergrad at Rochester Institute of Technology.`,
        `I'm currently living in the Rochester area with my lovely roommates, planning to start my final semester in the spring.`,
        `I spend my free time ${data.hobbies}, in no particular order.`
    ]
};

export default homeText;