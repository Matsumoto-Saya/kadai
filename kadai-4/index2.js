setTimeout(
    () => {
        console.log('HellO!')
        setTimeout(
            () => {
                console.log('Bye!')
            },
            2000
        )
    },
    3000
)