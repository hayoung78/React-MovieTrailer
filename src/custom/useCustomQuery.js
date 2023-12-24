import { useInfiniteQuery } from '@tanstack/react-query';

export const useCustomQuery = ({ queryKey = [], dataApi }) => {
    const resultQuery = useInfiniteQuery({
        queryKey: queryKey, // query의 고유 식별자
        queryFn: ({ pageParam = 1 }) => dataApi(pageParam), // 데이터를 불러오는 함수
        getNextPageParam: lastPage => {
            if (lastPage.results.length === 0) return undefined;
            return lastPage.page + 1;
        }, // 페이지를 불러오기 위한 파라미터를 반환 / lastPage.page + 1 은 다음 페이지를 로드하기 위함.
    });

    const {
        data, // 무한한 쿼리 데이터를 포함하는 객체
        isError, // 에러 - Boolean
        error, // 에러
        fetchNextPage, // 다음 페이지의 데이터를 불러옴
        hasNextPage, // 더 불러올 페이지가 있는지를 나타냄 - boolean
        isFetching, // 현재 데이터를 불러오고 있는지 여부
        isFetchingNextPage, // 다음 페이지를 불러오는게 진행중인지를 나타냄 - boolean
    } = resultQuery;

    // if (isError) return <div>ERRROR: {error.message}</div>; // error가 true 일 때, error message를 보여줌

    return {
        data,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    };
};
