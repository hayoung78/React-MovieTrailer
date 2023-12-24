import { useEffect, useRef } from 'react';

/**
 *
 * @param {*target} 관찰하고 싶은 DOM요소를 가리키는 ref 객체
 * @param {*onIntersect} target이 viewport에 보이면 호출될 콜백 함수
 * @param {*threshold} 요소가 viewport에 얼마나 들어와야 onIntersect 함수가 호출될지 결정하는 값. 0 ~ 1 / 0.8로 설정됨
 * @param {*rootMargin} root와 target의 교차 영역을 계산할 때 사용 / '0px'로 설정됨
 * @param {*enabled} 훅의 활성화 여부, false일 경우 관찰이 시작되지 않음 / ture로 설정됨
 * @discription 웹 API를 사용하여 특정 DOM요소가 viewport 내로 들어오거나 나갈 때 특정 동작을 수행
 */

// Intersection Observer = Target Element가 화면에 노출되었는 지 여부를 간단하게 구독할 수 있는 API

export const useIntersectionObserver = ({
    target, // DOM을 가리킨다
    onIntersect, // target이 viewport에 보이면 호출될 콜백 함수
    threshold = 0.8, // 해당 요소가 80%가 보여질 때 실행
    rootMargin = '80px', // target의 마진 값
    enabled = true, // 훅의 활성화 여부, false일 경우 관찰이 시작되지 않음
}) => {
    const observer = useRef();

    useEffect(() => {
        if (!enabled) return; // 관찰 중지

        // 기존 observer가 존재하면 disconnect()(중단) 호출
        if (observer.current) observer.current.disconnect();

        // 새로운 IntersectionObserver 생성
        observer.current = new IntersectionObserver(
            entries =>
                // isIntersecting 속성 확인
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 값이 true일 경우 onIntersect함수 실행
                        // console.log('Intersecting!');
                        // console.log(observer);
                        onIntersect();
                    }
                }),
            {
                rootMargin,
                threshold,
            },
        );
        const currentObserver = observer.current;

        // 새로운 target 관찰 시작
        if (target.current) {
            currentObserver.observe(target.current);
            console.log(target, 'target');
        }

        // 컴포넌트가 언마운트되거나 의존성이 변경될때 observer를 정리하기 위해
        return () => currentObserver.disconnect();
    }, [target.current, onIntersect, threshold, rootMargin, enabled]);

    return observer.current;
};
