from comments.serializers.common import CommentSerializer
from ..serializers.common import MpSerializer 

class PopulatedMpSerializer(MpSerializer):
    comments = CommentSerializer(many=True)