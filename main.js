

const img = new Image();
img.src = 'https://picsum.photos/200/300';
    img.addEventListener('load',() => {
        document.body.appendChild(img);
        const img2 = new Image();
        img2.src = 'https://picsum.photos/200/300';
        img2.addEventListener('load',() => {
            document.body.appendChild(img2);
            const img3 = new Image();
            img3.src = 'https://picsum.photos/200/300';
            img3.addEventListener('load',() => {
                document.body.appendChild(img3);
                const img4 = new Image();
                img4.src = 'https://picsum.photos/200/300';
                img4.addEventListener('load',() => {
                    document.body.appendChild(img4)
                    const img5 = new Image();
                    img5.src = 'https://picsum.photos/200/300';
                    img4.addEventListener('load',() => {
                    document.body.appendChild(img5)
                })
            })
        })
    }) 
})

