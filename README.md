# Vue Progressive Blur

This is a Vue implementation of [Framer's Progressive Blur](https://blur-gradient.learnframer.site/) component.

![Vue Progressive Blur](example.webp)

<br />

## Installation
```shell
npm i vue-progressive-blur
```

<br />

## Usage

The parent of the component must be a relative positioned element. You can edit the blur and border-radius of the component by passing the props `blur` and `border-radius` respectively.

```vue
<template>
    <div style="position: relative;">
        <img src="..." />
        <ProgressiveBlur 
            blur="32"
            border-radius="24"
        />
    </div>
</template>
```

<br />

## Todo

- [ ] Add direction prop (current only blurs from bottom to top)
- [ ] Allow passing the prop values with 'px' suffix

<br />

## License

MIT