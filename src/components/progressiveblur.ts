import {defineComponent, h} from "vue";

export interface ProgressiveBlurOptions {
    blur: number,
    borderRadius: number,
}

function parsePropValue(value: string | number | undefined): number {
    if (typeof value === 'string') {
        value = value.replace('px', '')
        return parseInt(value);
    } else if (typeof value === 'number') {
        return value;
    } else {
        return 0;
    }
}

export const ProgressiveBlur = defineComponent<ProgressiveBlurOptions>({
    name: 'ProgressiveBlur',
    props: ['blur', 'borderRadius'] as unknown as undefined,
    setup(props) {
        return () => {

            const _blur = parsePropValue(props.blur);
            const _borderRadius = parsePropValue(props.borderRadius);

            return h('div',
                {
                    style: {
                        position: 'absolute',
                        inset: 0,
                    }
                },
                [h(
                'div',
                {
                    style: {
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        borderRadius: _borderRadius + 'px',
                    },
                },
                [
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 1,
                                backdropFilter: 'blur(' + _blur / (2**7) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**7) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 2,
                                backdropFilter: 'blur(' + _blur / (2**6) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**6) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 3,
                                backdropFilter: 'blur(' + _blur / (2**5) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**5) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 4,
                                backdropFilter: 'blur(' + _blur / (2**4) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**4) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 5,
                                backdropFilter: 'blur(' + _blur / (2**3) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**3) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 6,
                                backdropFilter: 'blur(' + _blur / (2**2) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**2) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 7,
                                backdropFilter: 'blur(' + _blur / (2**1) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**1) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                    h(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                zIndex: 8,
                                backdropFilter: 'blur(' + _blur / (2**0) + 'px)',
                                WebkitBackdropFilter: 'blur(' + _blur / (2**0) + 'px)',
                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)',
                                borderRadius: _borderRadius + 'px',
                                pointerEvents: 'none',
                            },
                        },
                    ),
                ],
            )])
        }
    },
})