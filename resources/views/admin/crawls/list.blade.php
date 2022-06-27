@extends('admin.layouts.layout')
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-12">
              <h1 class="m-0">Dân trí</h1>
            </div>
          
          </div>
        </div>
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <section class="content">
                <div class="parent__post">
                    @foreach ($posts as $item)
                        
                    
                    <div class="father">
                        <div class="father__thumb">
                            <img src="{{$item->img}}" class="father__img" alt="">
                        </div>
                        <div class="father__content">
                            <div class="father__title">
                                <a href="{{$item->thumb}}"><h3>{{$item->title}}</h3></a>
                            </div>
                            <div class="father__body">
                                <a href="{{$item->thumb}}"><p>{{$item->description}}</p></a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    <div class="paginate_post">{!!$posts->links()!!}</div>
                </div>
      </section>
      <!-- /.content -->
    
@endsection